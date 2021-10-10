import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddProductCategoryDto } from './dto/add-product-category.dto';
import { ProductCategoryDto } from './dto/product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ProductCategoryEntity } from './product-category.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategoryEntity)
    private readonly productCategoryRepository: Repository<ProductCategoryEntity>,
  ) {}

  async AddProductCategory(productCategory: AddProductCategoryDto) {
    try {
      await this.productCategoryRepository.insert(productCategory);
      return productCategory;
    } catch (err) {
      throw new HttpException(
        { err, message: 'Error while adding new product category' },
        500,
      );
    }
  }

  async GetByName(name: string): Promise<ProductCategoryDto> {
    return await this.productCategoryRepository.findOne({ name: name });
  }

  async GetCategories(): Promise<ProductCategoryDto[]> {
    return await this.productCategoryRepository.find();
  }

  async GetCategoryById(id: number): Promise<ProductCategoryDto> {
    return await this.productCategoryRepository.findOne(id, {
      relations: ['products'],
    });
  }

  async CheckIfExists(name: string): Promise<boolean> {
    if (await this.GetByName(name)) return true;
    else return false;
  }

  async Update(
    productCategory: UpdateProductCategoryDto,
  ): Promise<UpdateProductCategoryDto> {
    try {
      const res = await this.productCategoryRepository.update(
        productCategory.id,
        productCategory,
      );
      if (res.affected > 0) {
        return productCategory;
      } else
        throw new HttpException(
          { message: 'Error while updating product category' },
          500,
        );
    } catch (err) {
      throw new HttpException({ err }, 500);
    }
  }

  async Delete(id: number): Promise<Boolean> {
    try {
      const res = await this.productCategoryRepository.delete(id);
      return res.affected > 0;
    } catch (err) {
      throw new HttpException(
        { err, message: 'Error while deleting product category' },
        500,
      );
    }
  }
}
