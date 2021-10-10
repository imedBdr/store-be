import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItemService } from 'src/cart-item/cart-item.service';
import { ClientEntity } from 'src/client/client.entity';
import { Repository } from 'typeorm';
import { CartEntity } from './cart.entity';
import { AddCartDto } from './dto/add-cart.dto';
import { CartDto } from './dto/cart.dto';

@Injectable()
export class CartService {
  constructor(
    private readonly cartItemService: CartItemService,
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
  ) {}

  async AddCart(cart: AddCartDto): Promise<CartDto> {
    try {
      const savedCart = new CartEntity();
      const client = new ClientEntity();

      client.id = cart.clientId;

      savedCart.total = cart.total;
      savedCart.client = client;

      return await this.cartRepository.save(savedCart);
    } catch (err) {
      throw new HttpException({ message: 'Error while adding Cart' }, 500);
    }
  }

  async GetById(id: number): Promise<CartDto> {
    try {
      return await this.cartRepository.findOne(id, {
        relations: ['cartItems', 'client'],
      });
    } catch (err) {
      throw new HttpException({ message: 'errror while getting cart' }, 500);
    }
  }

  async GetCarts(): Promise<CartDto[]> {
    try {
      return await this.cartRepository.find();
    } catch (err) {
      throw new HttpException({ message: 'errror while getting carts' }, 500);
    }
  }

  async SetTotal(id: number) {
    try {
      const cart = await this.GetById(id);
      const cartItemsArr = cart.cartItems;
      const total = cartItemsArr
        ?.map((e) => e.price * e.quantity)
        .reduce((prev, current) => prev + current);
      this.cartRepository.update(id, { total });
    } catch (err) {
      let message;
      if (err.message === 'errror while getting cart') message = err.message;
      else message = 'errror while updating cart total';
      throw new HttpException({ message }, 500);
    }
  }

  async DeleteCart(id: number) {
    try {
      const cartItems = (await this.GetById(id)).cartItems;
      Promise.all(
        cartItems?.map(async (e) => {
          return this.cartItemService.DeleteCartItem(e.id);
        }),
      );
    } catch (err) {
      if (err.message === 'errror while getting cart')
        throw new HttpException({ message: err.message }, 500);
    }
    try {
      this.cartRepository.delete(id);
    } catch (err) {
      throw new HttpException({ message: 'error while deleting cart' }, 500);
    }
  }
}
