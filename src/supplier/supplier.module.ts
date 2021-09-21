import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './supplier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupplierEntity])],
  providers: [SupplierService],
  controllers: [SupplierController],
})
export class SupplierModule {}
