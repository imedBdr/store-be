import { ProductInventoryEntity } from 'src/product-inventory/product-inventory.entity';
export declare class DiscountEntity {
    id: number;
    name: string;
    description: string;
    discount_percent: string;
    active: boolean;
    created_at: number;
    midified_at: number;
    productInventory: ProductInventoryEntity;
}
