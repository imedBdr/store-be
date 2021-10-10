import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductCategoryModule } from 'src/product-category/product-category.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), ProductCategoryModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
