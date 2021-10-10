import { CartDto } from 'src/cart/dto/cart.dto';
import { ClientPaymentDto } from 'src/client-payment/dto/client-payment.dto';
import { OrderDetailsDto } from 'src/order-details/dto/order-details.dto';

export class ClientDto {
  id: number;

  password?: string;

  username: string;

  email: string;

  first_name: string;

  last_name: string;

  phone_number: string;

  address: string;

  created_at: number;

  modified_at: number;

  last_login: number;

  carts: CartDto[];

  clientPayments: ClientPaymentDto[];

  orderDetails: OrderDetailsDto[];
}
