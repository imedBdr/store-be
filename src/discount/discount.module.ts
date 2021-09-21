import { Module } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountController } from './discount.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountEntity } from './discount.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountEntity])],
  providers: [DiscountService],
  controllers: [DiscountController],
})
export class DiscountModule {}
