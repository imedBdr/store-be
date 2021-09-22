import { CartItemEntity } from 'src/cart-item/cart-item.entity';
import { DiscountEntity } from 'src/discount/discount.entity';
import { OrderItemsEntity } from 'src/order-items/order-items.entity';
import { ProductEntity } from 'src/product/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'product_inventory', synchronize: false })
export class ProductInventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  buy_price: number;

  @Column()
  sell_price: number;

  @Column()
  created_at: number;

  @Column()
  modified_at: number;

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.prodcutInventory)
  cartItems: CartItemEntity[];

  @OneToMany(() => DiscountEntity, (discount) => discount.productInventory)
  discounts: DiscountEntity[];

  @OneToMany(() => OrderItemsEntity, (orderItem) => orderItem.productInventory)
  orderItems: OrderItemsEntity[];

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  product: ProductEntity;
}
