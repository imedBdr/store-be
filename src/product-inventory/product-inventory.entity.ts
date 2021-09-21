import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
