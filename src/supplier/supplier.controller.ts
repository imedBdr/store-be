import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddSupplierDto } from './dto/add-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post('')
  async AddSuplier(@Body() body: AddSupplierDto) {
    return this.supplierService.AddSuplier(body);
  }

  @Get(':id')
  async GetSupplierById(@Param() param) {
    return this.supplierService.GetSupplierById(parseInt(param.id));
  }

  @Get('')
  async GetSuppliers() {
    return this.supplierService.GetSuppliers();
  }

  @Put('')
  async Update(@Body() supplier: UpdateSupplierDto) {
    return this.supplierService.Update(supplier);
  }

  @Delete(':id')
  async Delete(@Param() param) {
    return this.supplierService.Delete(parseInt(param.id));
  }
}
