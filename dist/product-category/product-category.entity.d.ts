import { ProductEntity } from 'src/product/product.entity';
export declare class ProductCategoryEntity {
    id: number;
    name: string;
    description: string;
    created_at: number;
    modified_at: number;
    products: ProductEntity[];
}
