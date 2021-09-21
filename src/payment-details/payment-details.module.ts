import { Module } from '@nestjs/common';
import { PaymentDetailsService } from './payment-details.service';
import { PaymentDetailsController } from './payment-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentDetailsEntity } from './payment-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentDetailsEntity])],
  providers: [PaymentDetailsService],
  controllers: [PaymentDetailsController],
})
export class PaymentDetailsModule {}
