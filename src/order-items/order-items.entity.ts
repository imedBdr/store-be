import { OrderDetailsEntity } from 'src/order-details/order-details.entity';
import { ProductInventoryEntity } from 'src/product-inventory/product-inventory.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'order_items', synchronize: false })
export class OrderItemsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  created_at: number;

  @Column()
  midified_at: number;

  @ManyToOne(() => OrderDetailsEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  orderDetail: OrderDetailsEntity;

  @ManyToOne(() => ProductInventoryEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  productInventory: ProductInventoryEntity;
}
