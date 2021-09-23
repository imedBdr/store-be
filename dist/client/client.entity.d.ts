import { CartEntity } from 'src/cart/cart.entity';
import { ClientPaymentEntity } from 'src/client-payment/client-payment.entity';
import { OrderDetailsEntity } from 'src/order-details/order-details.entity';
export declare class ClientEntity {
    id: number;
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    address: string;
    created_at: number;
    modified_at: number;
    last_login: number;
    carts: CartEntity[];
    clientPayments: ClientPaymentEntity[];
    orderDetails: OrderDetailsEntity[];
}
