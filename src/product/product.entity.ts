import { BillItemEntity } from 'src/bill-item/bill-item.entity';
import { ProductCategoryEntity } from 'src/product-category/product-category.entity';
import { ProductInventoryEntity } from 'src/product-inventory/product-inventory.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'product', synchronize: false })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  created_at: number;

  @OneToMany(() => BillItemEntity, (BillItem) => BillItem.product)
  billItems: BillItemEntity[];

  @ManyToOne(() => ProductCategoryEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  productCategory: ProductCategoryEntity;

  @OneToMany(
    () => ProductInventoryEntity,
    (productInventory) => productInventory.product,
  )
  productInventories: ProductInventoryEntity[];
}
