import { ProductDto } from 'src/product/dto/product.dto';

export class BillItemDto {
  id: number;

  price: number;

  quantity: number;

  product: ProductDto;
}
