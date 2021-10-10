import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddSupplierDto } from './dto/add-supplier.dto';
import { SupplierExistanceDto } from './dto/supplier-existance.dto';
import { SupplierDto } from './dto/supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierEntity } from './supplier.entity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(SupplierEntity)
    private readonly supplierRepository: Repository<SupplierEntity>,
  ) {}

  async AddSuplier(supplier: AddSupplierDto): Promise<AddSupplierDto> {
    try {
      if (supplier.email && supplier.password && supplier.username) {
        await this.CheckIfExist(supplier);
        const res = await this.supplierRepository.insert(supplier);
        if (res.raw.insertId) return supplier;
        else
          throw new HttpException(
            { message: 'Error while Adding clinet' },
            500,
          );
      } else
        throw new HttpException(
          { message: 'Error while Adding supplier' },
          500,
        );
    } catch (err) {
      throw new HttpException(err.message, 500);
    }
  }

  async CheckIfExist(supplier: SupplierExistanceDto): Promise<boolean> {
    let res = await this.supplierRepository.find({
      first_name: supplier.first_name,
      last_name: supplier.last_name,
    });

    if (res?.length > 0)
      throw new HttpException({ message: 'Supllier is alredy exist' }, 500);
    else return true;
  }

  async GetSupplierById(id: number): Promise<SupplierDto> {
    const supplier = await this.supplierRepository.findOne(id, {
      relations: ['bill'],
    });
    if (supplier) {
      return supplier;
    }
    throw new HttpException({ message: 'supplier not found' }, 500);
  }

  async GetSuppliers(): Promise<SupplierDto[]> {
    return await this.supplierRepository.find();
  }

  async Update(supplier: UpdateSupplierDto): Promise<UpdateSupplierDto> {
    const res = await this.supplierRepository.update(supplier.id, supplier);
    if (res.affected > 0) return supplier;
    else return null;
  }

  async Delete(id: number): Promise<number> {
    try {
      const res = await this.supplierRepository.delete(id);
      return res?.affected > 0 ? id : -1;
    } catch (err) {
      return -1;
    }
  }
}
