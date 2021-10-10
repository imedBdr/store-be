import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddOrderItemDto } from './dto/add-order-item.dto';
import { OrderItemsDto } from './dto/order-items.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { OrderItemsService } from './order-items.service';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Get(':id')
  GetById(@Param() params): Promise<OrderItemsDto> {
    return this.orderItemsService.GetById(parseInt(params.id));
  }

  @Post('')
  AddOrderItem(@Body() item: AddOrderItemDto) {
    return this.orderItemsService.AddOrderItem(item);
  }

  @Delete(':id')
  DeleteOrderItem(@Param() params) {
    return this.orderItemsService.DeleteOrderItem(parseInt(params.id));
  }

  @Put('')
  Update(@Body() body: UpdateOrderItemDto) {
    return this.orderItemsService.Update(body);
  }
}
