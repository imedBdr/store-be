import { ProductInventoryDto } from 'src/product-inventory/dto/product-inventory.dto';

export class DiscountDto {
  id: number;

  name: string;

  description: string;

  discount_percent: string;

  active: boolean;

  created_at: number;

  midified_at: number;

  productInventory: ProductInventoryDto;
}
