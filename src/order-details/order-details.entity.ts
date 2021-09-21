import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'order_details', synchronize: false })
export class OrderDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @Column()
  created_at: number;

  @Column()
  midified_at: number;
}
