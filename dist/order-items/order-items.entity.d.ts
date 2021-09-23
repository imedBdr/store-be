import { OrderDetailsEntity } from 'src/order-details/order-details.entity';
import { ProductInventoryEntity } from 'src/product-inventory/product-inventory.entity';
export declare class OrderItemsEntity {
    id: number;
    price: number;
    quantity: number;
    created_at: number;
    midified_at: number;
    orderDetail: OrderDetailsEntity;
    productInventory: ProductInventoryEntity;
}
