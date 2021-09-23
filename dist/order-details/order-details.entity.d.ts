import { ClientEntity } from 'src/client/client.entity';
import { OrderItemsEntity } from 'src/order-items/order-items.entity';
import { PaymentDetailsEntity } from 'src/payment-details/payment-details.entity';
export declare class OrderDetailsEntity {
    id: number;
    total: number;
    created_at: number;
    midified_at: number;
    client: ClientEntity;
    orderItems: OrderItemsEntity[];
    paymentDetail: PaymentDetailsEntity;
}
