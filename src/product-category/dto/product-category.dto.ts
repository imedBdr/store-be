import { ProductDto } from 'src/product/dto/product.dto';

export class ProductCategoryDto {
  id: number;

  name: string;

  description: string;

  created_at: number;

  modified_at: number;

  products: ProductDto[];
}
