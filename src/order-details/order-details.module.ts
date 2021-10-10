import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailsEntity } from './order-details.entity';
import { OrderItemsModule } from 'src/order-items/order-items.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetailsEntity]), OrderItemsModule],
  providers: [OrderDetailsService],
  controllers: [OrderDetailsController],
})
export class OrderDetailsModule {}
