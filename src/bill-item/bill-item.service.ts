import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillEntity } from 'src/bill/bill.entity';
import { ProductEntity } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { BillItemEntity } from './bill-item.entity';
import { AddBillItemDto } from './dto/add-bill-item.dto';
import { BillItemDto } from './dto/bill-item.dto';
import { UpdateBillItemDto } from './dto/update-bill-item.dto';

@Injectable()
export class BillItemService {
  constructor(
    @InjectRepository(BillItemEntity)
    private readonly billItemRepository: Repository<BillItemEntity>,
  ) {}

  async AddBillItem(item: AddBillItemDto) {
    try {
      const product = new ProductEntity();
      const data = new BillItemEntity();
      const bill = new BillEntity();

      bill.id = item.billId;
      product.id = item.productId;

      data.product = product;
      data.bill = bill;

      data.price = item.price;
      data.quantity = item.quantity;
      await this.billItemRepository.save(data);
      return item;
    } catch (err) {
      throw new HttpException({ message: 'Error while adding BillItem' }, 500);
    }
  }

  async DeleteBillItem(id: number): Promise<number> {
    try {
      const ret = await this.billItemRepository.delete(id);
      if (ret.affected) return id;
      else return -1;
    } catch (err) {
      throw new HttpException(
        { message: 'Error while deleting BillItem' },
        500,
      );
    }
  }

  async Update(item: UpdateBillItemDto): Promise<UpdateBillItemDto> {
    try {
      const ret = await this.billItemRepository.update(item.id, item);
      if (ret.affected > 0) return item;
      else
        throw new HttpException({ message: 'Bill Item did not update' }, 500);
    } catch (err) {
      throw new HttpException(
        { message: 'Error while updating Bill item' },
        500,
      );
    }
  }

  async GetById(id: number): Promise<BillItemDto> {
    try {
      const ret = await this.billItemRepository.findOne(id, {
        relations: ['product'],
      });
      if (ret) return ret;
      else
        throw new HttpException(
          { message: `Cant find bill item id = ${id}` },
          500,
        );
    } catch (err) {
      throw new HttpException(
        { err: err, message: 'Error while finding bill item' },
        500,
      );
    }
  }
}
