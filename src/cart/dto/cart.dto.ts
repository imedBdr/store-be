//import { Ca } from 'src/bill-item/dto/bill-item.dto';

import { CartItemDto } from 'src/cart-item/dto/cart-item.dto';
import { ClientDto } from 'src/client/dto/client.dto';

export class CartDto {
  id: number;

  total: number;

  created_at: number;

  modified_at: number;

  cartItems: CartItemDto[];

  client: ClientDto;
}
