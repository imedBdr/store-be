import { BillItemEntity } from 'src/bill-item/bill-item.entity';
import { SupplierEntity } from 'src/supplier/supplier.entity';
export declare class BillEntity {
    id: number;
    total: number;
    created_at: number;
    modified_at: number;
    billItems: BillItemEntity[];
    supplier: SupplierEntity;
}
