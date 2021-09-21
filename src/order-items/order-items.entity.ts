import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
