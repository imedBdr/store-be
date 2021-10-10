import { ProductDto } from 'src/product/dto/product.dto';

export class UpdateProductInventoryDto {
  id: number;

  quantity: number;

  buy_price: number;

  sell_price: number;

  product: number;
}
