import { BillItemEntity } from 'src/bill-item/bill-item.entity';
import { SupplierEntity } from 'src/supplier/supplier.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @OneToMany((type) => BillItemEntity, (billItem) => billItem.bill)
  billItems: BillItemEntity[];

  @ManyToOne((type) => SupplierEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  supplier: SupplierEntity;
}
