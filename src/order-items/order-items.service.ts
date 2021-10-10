import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetailsEntity } from 'src/order-details/order-details.entity';
import { ProductInventoryEntity } from 'src/product-inventory/product-inventory.entity';
import { UpdateSupplierDto } from 'src/supplier/dto/update-supplier.dto';
import { Repository } from 'typeorm';
import { AddOrderItemDto } from './dto/add-order-item.dto';
import { OrderItemsDto } from './dto/order-items.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { OrderItemsEntity } from './order-items.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItemsEntity)
    private readonly orderItemsRepository: Repository<OrderItemsEntity>,
  ) {}

  async AddOrderItem(item: AddOrderItemDto) {
    try {
      const productInvnetory = new ProductInventoryEntity();
      const data = new OrderItemsEntity();
      const order = new OrderDetailsEntity();

      order.id = item.orderDetialId;
      productInvnetory.id = item.productInventoryId;

      data.productInventory = productInvnetory;
      data.orderDetail = order;

      data.price = item.price;
      data.quantity = item.quantity;
      await this.orderItemsRepository.save(data);
      return item;
    } catch (err) {
      throw new HttpException({ message: 'Error while adding OrderItem' }, 500);
    }
  }

  async DeleteOrderItem(id: number): Promise<number> {
    try {
      const ret = await this.orderItemsRepository.delete(id);
      if (ret.affected) return id;
      else return -1;
    } catch (err) {
      throw new HttpException(
        { message: 'Error while deleting OrderItem' },
        500,
      );
    }
  }

  async Update(item: UpdateOrderItemDto): Promise<UpdateOrderItemDto> {
    try {
      const ret = await this.orderItemsRepository.update(item.id, item);
      if (ret.affected > 0) return item;
      else
        throw new HttpException({ message: 'OrderItem did not update' }, 500);
    } catch (err) {
      throw new HttpException(
        { message: 'Error while updating OrderItem' },
        500,
      );
    }
  }

  async GetById(id: number): Promise<OrderItemsDto> {
    try {
      const ret = await this.orderItemsRepository.findOne(id, {
        relations: ['productInventory'],
      });
      if (ret) return ret;
      else
        throw new HttpException(
          { message: `Cant find order item id = ${id}` },
          500,
        );
    } catch (err) {
      throw new HttpException(
        { err: err, message: 'Error while finding order item' },
        500,
      );
    }
  }
}
