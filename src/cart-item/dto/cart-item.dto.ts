import { ProductInventoryDto } from 'src/product-inventory/dto/product-inventory.dto';

export class CartItemDto {
  id: number;

  price: number;

  quantity: number;

  prodcutInventory: ProductInventoryDto;
}
