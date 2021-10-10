import { ClientEntity } from 'src/client/client.entity';
import { OrderItemsEntity } from 'src/order-items/order-items.entity';
import { PaymentDetailsEntity } from 'src/payment-details/payment-details.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'order_details', synchronize: false })
export class OrderDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @Column()
  created_at: number;

  @Column()
  modified_at: number;

  @ManyToOne(() => ClientEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  client: ClientEntity;

  @OneToMany(() => OrderItemsEntity, (orderItem) => orderItem.orderDetail)
  orderItems: OrderItemsEntity[];

  @ManyToOne(() => PaymentDetailsEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  paymentDetail: PaymentDetailsEntity;
}
