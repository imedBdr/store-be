import { CartEntity } from 'src/cart/cart.entity';
import { ProductInventoryEntity } from 'src/product-inventory/product-inventory.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cart_item', synchronize: false })
export class CartItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  created_at: number;

  @Column()
  modified_at: number;

  @ManyToOne(() => CartEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  cart: CartEntity;

  @ManyToOne(() => ProductInventoryEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  prodcutInventory: ProductInventoryEntity;
}
