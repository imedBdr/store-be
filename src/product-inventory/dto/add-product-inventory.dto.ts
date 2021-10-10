import { ProductDto } from 'src/product/dto/product.dto';

export class AddProductInventoryDto {
  quantity: number;

  buy_price: number;

  sell_price: number;

  product: number;
}
