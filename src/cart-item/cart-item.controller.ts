import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { CartItemDto } from './dto/cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Controller('cartItem')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Get(':id')
  GetById(@Param() params): Promise<CartItemDto> {
    return this.cartItemService.GetById(parseInt(params.id));
  }

  @Post('')
  AddCartItem(@Body() item: AddCartItemDto) {
    return this.cartItemService.AddCartItem(item);
  }

  @Delete(':id')
  DeleteCartItem(@Param() params) {
    return this.cartItemService.DeleteCartItem(parseInt(params.id));
  }

  @Put('')
  Update(@Body() body: UpdateCartItemDto) {
    return this.cartItemService.Update(body);
  }
}
