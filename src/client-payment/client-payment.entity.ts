import { ClientEntity } from 'src/client/client.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @ManyToOne(() => ClientEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  client: ClientEntity;
}
