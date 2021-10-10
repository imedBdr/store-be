import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddOrderDetailDto } from './dto/add-order-detail.dto';
import { OrderDetailsDto } from './dto/order-details.dto';
import { OrderDetailsService } from './order-details.service';

@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Post('')
  AddOrderDetails(@Body() body: AddOrderDetailDto): Promise<OrderDetailsDto> {
    return this.orderDetailsService.AddOrderDetails(body);
  }

  @Get(':id')
  GetById(@Param() params): Promise<OrderDetailsDto> {
    return this.orderDetailsService.GetById(parseInt(params.id));
  }

  @Get('bills')
  GetOrders(): Promise<OrderDetailsDto[]> {
    return this.orderDetailsService.GetOrders();
  }

  @Put('')
  SetTotal(@Body() body) {
    this.orderDetailsService.SetTotal(body.id);
  }

  @Delete(':id')
  DeleteOrderDetails(@Param() params) {
    return this.orderDetailsService.DeleteOrderDetails(parseInt(params.id));
  }
}
