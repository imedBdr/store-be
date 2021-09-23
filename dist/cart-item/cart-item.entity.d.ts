import { CartEntity } from 'src/cart/cart.entity';
import { ProductInventoryEntity } from 'src/product-inventory/product-inventory.entity';
export declare class CartItemEntity {
    id: number;
    quantity: number;
    price: number;
    created_at: number;
    modified_at: number;
    cart: CartEntity;
    prodcutInventory: ProductInventoryEntity;
}
