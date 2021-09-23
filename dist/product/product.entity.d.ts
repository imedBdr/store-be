import { BillItemEntity } from 'src/bill-item/bill-item.entity';
import { ProductCategoryEntity } from 'src/product-category/product-category.entity';
import { ProductInventoryEntity } from 'src/product-inventory/product-inventory.entity';
export declare class ProductEntity {
    id: number;
    name: string;
    description: string;
    created_at: number;
    BillItems: BillItemEntity[];
    productCategory: ProductCategoryEntity;
    productInventories: ProductInventoryEntity[];
}
