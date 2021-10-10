import { OrderDetailsDto } from 'src/order-details/dto/order-details.dto';
import { ProductInventoryDto } from 'src/product-inventory/dto/product-inventory.dto';

export class OrderItemsDto {
  id: number;

  price: number;

  quantity: number;

  created_at: number;

  modified_at: number;

  orderDetail: OrderDetailsDto;

  productInventory: ProductInventoryDto;
}
