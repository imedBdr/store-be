import { ProductEntity } from 'src/product/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product-category', synchronize: false })
export class ProductCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  created_at: number;

  @Column()
  modified_at: number;

  @OneToMany(() => ProductEntity, (product) => product.productCategory)
  products: ProductEntity[];
}
