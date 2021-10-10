import { CartEntity } from 'src/cart/cart.entity';
import { ClientPaymentEntity } from 'src/client-payment/client-payment.entity';
import { OrderDetailsEntity } from 'src/order-details/order-details.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'client', synchronize: false })
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @Column()
  created_at: number;

  @Column()
  modified_at: number;

  @Column()
  last_login: number;

  @OneToMany(() => CartEntity, (cart) => cart.client)
  carts: CartEntity[];

  @OneToMany(() => ClientPaymentEntity, (clientPayment) => clientPayment.client)
  clientPayments: ClientPaymentEntity[];

  @OneToMany(() => OrderDetailsEntity, (orderDetail) => orderDetail.client)
  orderDetails: OrderDetailsEntity[];
}
