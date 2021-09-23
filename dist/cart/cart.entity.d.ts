import { CartItemEntity } from 'src/cart-item/cart-item.entity';
import { ClientEntity } from 'src/client/client.entity';
export declare class CartEntity {
    id: number;
    total: number;
    created_at: number;
    modified_at: number;
    cartItems: CartItemEntity[];
    client: ClientEntity;
}
