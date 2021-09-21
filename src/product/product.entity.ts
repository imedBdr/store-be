import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product', synchronize: false })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  created_at: number;
}
