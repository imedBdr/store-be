import { CartItemDto } from 'src/cart-item/dto/cart-item.dto';
import { DiscountDto } from 'src/discount/dto/discount.dto';
import { OrderItemsDto } from 'src/order-items/dto/order-items.dto';
import { ProductDto } from 'src/product/dto/product.dto';

export class ProductInventoryDto {
  id: number;

  quantity: number;

  buy_price: number;

  sell_price: number;

  created_at: number;

  modified_at: number;

  cartItems: CartItemDto[];

  discounts: DiscountDto[];

  orderItems: OrderItemsDto[];

  product: ProductDto;
}
