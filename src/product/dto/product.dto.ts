import { BillItemDto } from 'src/bill-item/dto/bill-item.dto';
import { ProductCategoryDto } from 'src/product-category/dto/product-category.dto';
import { ProductInventoryDto } from 'src/product-inventory/dto/product-inventory.dto';

export class ProductDto {
  id: number;

  name: string;

  description: string;

  created_at: number;

  productCategory: ProductCategoryDto;

  billItems: BillItemDto[];

  productInventories: ProductInventoryDto[];
}
