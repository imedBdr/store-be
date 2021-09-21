import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bill', synchronize: false })
export class BillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @Column()
  created_at: number;

  @Column()
  modified_at: number;
}
