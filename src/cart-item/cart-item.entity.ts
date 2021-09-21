import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
