import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillItemService } from 'src/bill-item/bill-item.service';
import { SupplierEntity } from 'src/supplier/supplier.entity';
import { Repository } from 'typeorm';
import { BillEntity } from './bill.entity';
import { AddBillDto } from './dto/add-bill.dto';
import { BillDto } from './dto/bill.dto';

@Injectable()
export class BillService {
  constructor(
    private readonly billItemService: BillItemService,
    @InjectRepository(BillEntity)
    private readonly billRepository: Repository<BillEntity>,
  ) {}

  async AddBill(bill: AddBillDto): Promise<BillDto> {
    try {
      const savedbill = new BillEntity();
      const supplier = new SupplierEntity();

      supplier.id = bill.supplierId;

      savedbill.total = bill.total;
      savedbill.supplier = supplier;

      return await this.billRepository.save(savedbill);
    } catch (err) {
      throw new HttpException({ message: 'Error while adding Bill' }, 500);
    }
  }

  async GetById(id: number): Promise<BillDto> {
    try {
      return await this.billRepository.findOne(id, {
        relations: ['billItems', 'supplier'],
      });
    } catch (err) {
      throw new HttpException({ message: 'errror while getting bill' }, 500);
    }
  }

  async GetBills(): Promise<BillDto[]> {
    try {
      return await this.billRepository.find();
    } catch (err) {
      throw new HttpException({ message: 'errror while getting bills' }, 500);
    }
  }

  async SetTotal(id: number) {
    try {
      const bill = await this.GetById(id);
      const billItemsArr = bill.billItems;
      const total = billItemsArr
        ?.map((e) => e.price * e.quantity)
        .reduce((prev, current) => prev + current);
      this.billRepository.update(id, { total });
    } catch (err) {
      let message;
      if (err.message === 'errror while getting bill') message = err.message;
      else message = 'errror while updating bill total';
      throw new HttpException({ message }, 500);
    }
  }

  async DeleteBill(id: number) {
    try {
      const billItems = (await this.GetById(id)).billItems;
      Promise.all(
        billItems?.map(async (e) => {
          return this.billItemService.DeleteBillItem(e.id);
        }),
      );
    } catch (err) {
      if (err.message === 'errror while getting bill')
        throw new HttpException({ message: err.message }, 500);
    }
    try {
      this.billRepository.delete(id);
    } catch (err) {
      throw new HttpException({ message: 'error while deleting Bill' }, 500);
    }
  }
}
