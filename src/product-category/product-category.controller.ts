import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddProductCategoryDto } from './dto/add-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ProductCategoryService } from './product-category.service';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Post('')
  AddProductCategory(@Body() body: AddProductCategoryDto) {
    return this.productCategoryService.AddProductCategory(body);
  }

  @Get('')
  GetCategories() {
    return this.productCategoryService.GetCategories();
  }

  @Get(':id')
  GetCategoryById(@Param() param) {
    return this.productCategoryService.GetCategoryById(parseInt(param.id));
  }

  @Put('')
  Update(@Body() body: UpdateProductCategoryDto) {
    return this.productCategoryService.Update(body);
  }

  @Delete(':id')
  Delete(@Param() param) {
    return this.productCategoryService.Delete(parseInt(param.id));
  }
}
