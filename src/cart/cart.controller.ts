import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddCartDto } from './dto/add-cart.dto';
import { CartDto } from './dto/cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('')
  AddCart(@Body() body: AddCartDto): Promise<CartDto> {
    return this.cartService.AddCart(body);
  }

  @Get(':id')
  GetById(@Param() params): Promise<CartDto> {
    return this.cartService.GetById(parseInt(params.id));
  }

  @Get('bills')
  GetCarts(): Promise<CartDto[]> {
    return this.cartService.GetCarts();
  }

  @Put('')
  SetTotal(@Body() body) {
    this.cartService.SetTotal(body.id);
  }

  @Delete(':id')
  DeleteCart(@Param() params) {
    return this.cartService.DeleteCart(parseInt(params.id));
  }
}
