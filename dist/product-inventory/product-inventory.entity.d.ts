import { CartItemEntity } from 'src/cart-item/cart-item.entity';
import { DiscountEntity } from 'src/discount/discount.entity';
import { OrderItemsEntity } from 'src/order-items/order-items.entity';
import { ProductEntity } from 'src/product/product.entity';
export declare class ProductInventoryEntity {
    id: number;
    quantity: number;
    buy_price: number;
    sell_price: number;
    created_at: number;
    modified_at: number;
    cartItems: CartItemEntity[];
    discounts: DiscountEntity[];
    orderItems: OrderItemsEntity[];
    product: ProductEntity;
}
