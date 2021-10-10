import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/cart/cart.entity';
import { ProductInventoryEntity } from 'src/product-inventory/product-inventory.entity';
import { Repository } from 'typeorm';
import { CartItemEntity } from './cart-item.entity';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { CartItemDto } from './dto/cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Injectable()
export class CartItemService {
  constructor(
    @InjectRepository(CartItemEntity)
    private readonly cartItemRepository: Repository<CartItemEntity>,
  ) {}

  async AddCartItem(item: AddCartItemDto) {
    try {
      const productInventory = new ProductInventoryEntity();
      const data = new CartItemEntity();
      const cart = new CartEntity();

      cart.id = item.cartId;
      productInventory.id = item.productIventoryId;

      data.prodcutInventory = productInventory;
      data.cart = cart;

      data.price = item.price;
      data.quantity = item.quantity;
      await this.cartItemRepository.save(data);
      return item;
    } catch (err) {
      throw new HttpException({ message: 'Error while adding CartItem' }, 500);
    }
  }

  async DeleteCartItem(id: number): Promise<number> {
    try {
      const ret = await this.cartItemRepository.delete(id);
      if (ret.affected) return id;
      else return -1;
    } catch (err) {
      throw new HttpException(
        { message: 'Error while deleting CartItem' },
        500,
      );
    }
  }

  async Update(item: UpdateCartItemDto): Promise<UpdateCartItemDto> {
    try {
      const ret = await this.cartItemRepository.update(item.id, item);
      if (ret.affected > 0) return item;
      else throw new HttpException({ message: 'CartItem did not update' }, 500);
    } catch (err) {
      throw new HttpException(
        { message: 'Error while updating CartItem' },
        500,
      );
    }
  }

  async GetById(id: number): Promise<CartItemDto> {
    try {
      const ret = await this.cartItemRepository.findOne(id, {
        relations: ['prodcutInventory'],
      });
      if (ret) return ret;
      else
        throw new HttpException(
          { message: `Cant find CartItem id = ${id}` },
          500,
        );
    } catch (err) {
      throw new HttpException(
        { err: err, message: 'Error while finding CartItem' },
        500,
      );
    }
  }
}
