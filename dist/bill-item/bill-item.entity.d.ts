import { BillEntity } from 'src/bill/bill.entity';
import { ProductEntity } from 'src/product/product.entity';
export declare class BillItemEntity {
    id: number;
    price: number;
    quantity: number;
    bill: BillEntity;
    product: ProductEntity;
}
