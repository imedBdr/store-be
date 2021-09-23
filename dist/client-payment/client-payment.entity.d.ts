import { ClientEntity } from 'src/client/client.entity';
export declare class ClientPaymentEntity {
    id: number;
    payment_type: string;
    provider: string;
    account_number: string;
    expiry: number;
    client: ClientEntity;
}
