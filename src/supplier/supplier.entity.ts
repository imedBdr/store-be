import { BillEntity } from 'src/bill/bill.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'supplier', synchronize: false })
export class SupplierEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @OneToMany((type) => BillEntity, (bill) => bill.supplier)
  bill: BillEntity[];
}
