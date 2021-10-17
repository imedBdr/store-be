import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategoryEntity } from 'src/product-category/product-category.entity';
import { Repository } from 'typeorm';
import { AddProductDto } from './dto/add-product.dto';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async AddProduct(product: AddProductDto): Promise<AddProductDto> {
    try {
      if (await this.CheckIfExists(product.name))
        throw new HttpException({ message: 'Product is already exist' }, 500);
      const newProduct = new ProductEntity();
      const category = new ProductCategoryEntity();

      category.id = product.productCategory;
      newProduct.name = product.name;
      newProduct.description = product.description;
      newProduct.productCategory = category;

      const res = await this.productRepository.save(newProduct);
      if (res) return product;
    } catch (err) {
      throw new HttpException(
        { err, message: 'Error while adding product' },
        500,
      );
    }
  }

  async GetProductByName(name: string): Promise<ProductDto> {
    return await this.productRepository.findOne({ name: name });
  }

  async GetProductById(id: number): Promise<ProductDto> {
    return await await this.productRepository.findOne(id, {
      relations: ['productCategory'],
    });
  }
  async GetProducts(): Promise<ProductDto[]> {
    return await this.productRepository.find();
  }

  async CheckIfExists(name: string): Promise<Boolean> {
    return (await this.GetProductByName(name)) ? true : false;
  }

  async Update(product: UpdateProductDto): Promise<UpdateProductDto> {
    try {
      let res;
      const oldCategory = (await this.GetProductById(product.id))
        .productCategory.id;
      if (oldCategory === product.productCategory) {
        const { productCategory, ...rest } = product;
        res = await this.productRepository.update(rest.id, rest);
      } else {
        const newProduct = new ProductEntity();
        const newCategory = new ProductCategoryEntity();

        newCategory.id = product.productCategory;
        newProduct.id = product.id;
        newProduct.name = product.name;
        newProduct.description = product.description;
        newProduct.productCategory = newCategory;
        res = await this.productRepository.update(product.id, newProduct);
      }
      return res.affected > 0 ? product : null;
    } catch (err) {
      throw new HttpException(
        { err, message: 'Error while updating product' },
        500,
      );
    }
  }
  async Delete(id: number): Promise<Boolean> {
    const res = await this.productRepository.delete(id);
    return res.affected > 0;
  }
}
