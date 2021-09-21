import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'client_payment', synchronize: false })
export class ClientPaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  payment_type: string;

  @Column()
  provider: string;

  @Column()
  account_number: string;

  @Column()
  expiry: number;
}
