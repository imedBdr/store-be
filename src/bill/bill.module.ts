import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { BillEntity } from './bill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillItemModule } from 'src/bill-item/bill-item.module';

@Module({
  imports: [TypeOrmModule.forFeature([BillEntity]), BillItemModule],
  providers: [BillService],
  controllers: [BillController],
})
export class BillModule {}
