import { Module } from '@nestjs/common';
import { ProductInventoryService } from './product-inventory.service';
import { ProductInventoryController } from './product-inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInventoryEntity } from './product-inventory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInventoryEntity])],
  providers: [ProductInventoryService],
  controllers: [ProductInventoryController],
})
export class ProductInventoryModule {}
