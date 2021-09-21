import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'payment_details', synchronize: false })
export class PaymentDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  provider: string;

  @Column()
  status: string;

  @Column()
  created_at: number;

  @Column()
  midified_at: number;
}
