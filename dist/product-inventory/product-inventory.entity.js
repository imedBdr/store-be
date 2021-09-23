"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventoryEntity = void 0;
const cart_item_entity_1 = require("../cart-item/cart-item.entity");
const discount_entity_1 = require("../discount/discount.entity");
const order_items_entity_1 = require("../order-items/order-items.entity");
const product_entity_1 = require("../product/product.entity");
const typeorm_1 = require("typeorm");
let ProductInventoryEntity = class ProductInventoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductInventoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductInventoryEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductInventoryEntity.prototype, "buy_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductInventoryEntity.prototype, "sell_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductInventoryEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductInventoryEntity.prototype, "modified_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_item_entity_1.CartItemEntity, (cartItem) => cartItem.prodcutInventory),
    __metadata("design:type", Array)
], ProductInventoryEntity.prototype, "cartItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => discount_entity_1.DiscountEntity, (discount) => discount.productInventory),
    __metadata("design:type", Array)
], ProductInventoryEntity.prototype, "discounts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_items_entity_1.OrderItemsEntity, (orderItem) => orderItem.productInventory),
    __metadata("design:type", Array)
], ProductInventoryEntity.prototype, "orderItems", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", product_entity_1.ProductEntity)
], ProductInventoryEntity.prototype, "product", void 0);
ProductInventoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_inventory', synchronize: false })
], ProductInventoryEntity);
exports.ProductInventoryEntity = ProductInventoryEntity;
//# sourceMappingURL=product-inventory.entity.js.map