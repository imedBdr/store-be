import { CartItemEntity } from 'src/cart-item/cart-item.entity';
import { ClientEntity } from 'src/client/client.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cart', synchronize: false })
export class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @Column()
  created_at: number;

  @Column()
  modified_at: number;

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.cart)
  cartItems: CartItemEntity[];

  @ManyToOne(() => ClientEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  client: ClientEntity;
}
