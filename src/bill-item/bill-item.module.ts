import { Module } from '@nestjs/common';
import { BillItemService } from './bill-item.service';
import { BillItemController } from './bill-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillItemEntity } from './bill-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BillItemEntity])],
  providers: [BillItemService],
  controllers: [BillItemController],
})
export class BillItemModule {}
