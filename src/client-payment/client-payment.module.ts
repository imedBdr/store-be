import { Module } from '@nestjs/common';
import { ClientPaymentService } from './client-payment.service';
import { ClientPaymentController } from './client-payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientPaymentEntity } from './client-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientPaymentEntity])],
  providers: [ClientPaymentService],
  controllers: [ClientPaymentController],
})
export class ClientPaymentModule {}
