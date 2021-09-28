import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplierEntity } from 'src/supplier/supplier.entity';
import { Repository } from 'typeorm';
import { BillEntity } from './bill.entity';
import { AddBillDto } from './dto/add-bill.dto';
import { BillDto } from './dto/bill.dto';

@Injectable()
export class BillService {
  constructor(
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
}
