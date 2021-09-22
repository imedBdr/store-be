import { ProductInventoryEntity } from 'src/product-inventory/product-inventory.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'discount', synchronize: false })
export class DiscountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  discount_percent: string;

  @Column()
  active: boolean;

  @Column()
  created_at: number;

  @Column()
  midified_at: number;

  @ManyToOne(() => ProductInventoryEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  productInventory: ProductInventoryEntity;
}
