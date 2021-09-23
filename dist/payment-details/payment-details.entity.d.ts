import { OrderDetailsEntity } from 'src/order-details/order-details.entity';
export declare class PaymentDetailsEntity {
    id: number;
    amount: number;
    provider: string;
    status: string;
    created_at: number;
    midified_at: number;
    orderDetails: OrderDetailsEntity[];
}
