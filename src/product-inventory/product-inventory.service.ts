import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { AddProductInventoryDto } from './dto/add-product-inventory.dto';
import { ProductInventoryDto } from './dto/product-inventory.dto';
import { UpdateProductInventoryDto } from './dto/update-product-inventory.dto';
import { ProductInventoryEntity } from './product-inventory.entity';

@Injectable()
export class ProductInventoryService {
  constructor(
    @InjectRepository(ProductInventoryEntity)
    private readonly productInventoryRepository: Repository<ProductInventoryEntity>,
  ) {}
  async Add(
    productInventory: AddProductInventoryDto,
  ): Promise<AddProductInventoryDto> {
    try {
      const newProdInv = new ProductInventoryEntity();
      const product = new ProductEntity();

      product.id = productInventory.product;
      newProdInv.product = product;
      newProdInv.quantity = productInventory.quantity;
      newProdInv.buy_price = productInventory.buy_price;
      newProdInv.sell_price = productInventory.sell_price;
      const res = await this.productInventoryRepository.save(newProdInv);
      if (res) return productInventory;
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  async GetProductInventoryById(id: number): Promise<ProductInventoryDto> {
    return await this.productInventoryRepository.findOne(id, {
      relations: ['product'],
    });
  }

  async GetProductInventories(): Promise<ProductInventoryDto[]> {
    return await this.productInventoryRepository.find();
  }

  async Update(
    productInventory: UpdateProductInventoryDto,
  ): Promise<UpdateProductInventoryDto> {
    try {
      const oldProdInv = await this.GetProductInventoryById(
        productInventory.id,
      );
      let newProdInv = new ProductInventoryEntity();
      const product = new ProductEntity();
      product.id = productInventory.product;
      newProdInv.product = product;
      newProdInv.quantity = productInventory.quantity;
      newProdInv.buy_price = productInventory.buy_price;
      newProdInv.sell_price = productInventory.sell_price;
      newProdInv.id = productInventory.id;
      const res = await this.productInventoryRepository.update(
        productInventory.id,
        newProdInv,
      );
      if (res.affected > 0) return productInventory;
      else return null;
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  async Delete(id: number): Promise<boolean> {
    const res = await this.productInventoryRepository.delete(id);
    return res.affected > 0;
  }
}
