import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
