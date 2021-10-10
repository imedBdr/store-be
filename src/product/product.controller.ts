import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('')
  AddProduct(@Body() body: AddProductDto) {
    return this.productService.AddProduct(body);
  }
  @Get(':id')
  GetProductById(@Param() param) {
    return this.productService.GetProductById(parseInt(param.id));
  }
  @Get('')
  GetProducts() {
    return this.productService.GetProducts();
  }

  @Delete(':id')
  Delete(@Param() param) {
    return this.productService.Delete(parseInt(param.id));
  }

  @Put('')
  Update(@Body() body: UpdateProductDto) {
    return this.Update(body);
  }
}
