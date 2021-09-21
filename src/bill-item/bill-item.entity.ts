import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bill_item', synchronize: false })
export class BillItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;
}
