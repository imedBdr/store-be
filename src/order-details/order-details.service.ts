import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/client.entity';
import { OrderItemsService } from 'src/order-items/order-items.service';
import { Repository } from 'typeorm';
import { AddOrderDetailDto } from './dto/add-order-detail.dto';
import { OrderDetailsDto } from './dto/order-details.dto';
import { OrderDetailsEntity } from './order-details.entity';

@Injectable()
export class OrderDetailsService {
  constructor(
    private readonly orderItemsService: OrderItemsService,
    @InjectRepository(OrderDetailsEntity)
    private readonly orderDetailsRepository: Repository<OrderDetailsEntity>,
  ) {}
  async AddOrderDetails(order: AddOrderDetailDto): Promise<OrderDetailsDto> {
    try {
      const savedOrder = new OrderDetailsEntity();
      const client = new ClientEntity();

      client.id = order.clientId;

      savedOrder.total = order.total;
      savedOrder.client = client;

      return await this.orderDetailsRepository.save(savedOrder);
    } catch (err) {
      throw new HttpException({ message: 'Error while adding Order' }, 500);
    }
  }

  async GetById(id: number): Promise<OrderDetailsDto> {
    try {
      return await this.orderDetailsRepository.findOne(id, {
        relations: ['client', 'orderItems', 'paymentDetail'],
      });
    } catch (err) {
      throw new HttpException({ message: 'errror while getting Order' }, 500);
    }
  }

  async GetOrders(): Promise<OrderDetailsDto[]> {
    try {
      return await this.orderDetailsRepository.find();
    } catch (err) {
      throw new HttpException({ message: 'errror while getting Order' }, 500);
    }
  }

  async SetTotal(id: number) {
    try {
      const order = await this.GetById(id);
      const orderItemsArr = order.orderItems;
      const total = orderItemsArr
        ?.map((e) => e.price * e.quantity)
        .reduce((prev, current) => prev + current);
      this.orderDetailsRepository.update(id, { total });
    } catch (err) {
      let message;
      if (err.message === 'errror while getting order') message = err.message;
      else message = 'errror while updating order total';
      throw new HttpException({ message }, 500);
    }
  }

  async DeleteOrderDetails(id: number) {
    try {
      const orderItems = (await this.GetById(id)).orderItems;
      Promise.all(
        orderItems?.map(async (e) => {
          return this.orderItemsService.DeleteOrderItem(e.id);
        }),
      );
    } catch (err) {
      if (err.message === 'errror while getting order')
        throw new HttpException({ message: err.message }, 500);
    }
    try {
      this.orderDetailsRepository.delete(id);
    } catch (err) {
      throw new HttpException({ message: 'error while deleting order' }, 500);
    }
  }
}
