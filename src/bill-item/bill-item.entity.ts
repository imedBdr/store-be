import { BillEntity } from 'src/bill/bill.entity';
import { ProductEntity } from 'src/product/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'bill_item', synchronize: false })
export class BillItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => BillEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  bill: BillEntity;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  product: ProductEntity;
}
