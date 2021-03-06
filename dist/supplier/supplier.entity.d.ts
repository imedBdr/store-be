import { BillEntity } from 'src/bill/bill.entity';
export declare class SupplierEntity {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    bill: BillEntity[];
}
