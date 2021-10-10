import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddProductInventoryDto } from './dto/add-product-inventory.dto';
import { UpdateProductInventoryDto } from './dto/update-product-inventory.dto';
import { ProductInventoryService } from './product-inventory.service';

@Controller('product-inventory')
export class ProductInventoryController {
  constructor(
    private readonly productInventoryService: ProductInventoryService,
  ) {}

  @Post('')
  Add(@Body() body: AddProductInventoryDto) {
    return this.productInventoryService.Add(body);
  }

  @Get(':id')
  GetProductInventoryById(@Param() param) {
    return this.productInventoryService.GetProductInventoryById(
      parseInt(param.id),
    );
  }

  @Get('')
  GetProductInventories() {
    return this.productInventoryService.GetProductInventories();
  }

  @Put('')
  Update(@Body() body: UpdateProductInventoryDto) {
    return this.productInventoryService.Update(body);
  }

  @Delete(':id')
  Delete(@Param() param) {
    return this.productInventoryService.Delete(parseInt(param.id));
  }
}
