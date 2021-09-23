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
exports.OrderItemsEntity = void 0;
const order_details_entity_1 = require("../order-details/order-details.entity");
const product_inventory_entity_1 = require("../product-inventory/product-inventory.entity");
const typeorm_1 = require("typeorm");
let OrderItemsEntity = class OrderItemsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderItemsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItemsEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItemsEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItemsEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItemsEntity.prototype, "midified_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_details_entity_1.OrderDetailsEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", order_details_entity_1.OrderDetailsEntity)
], OrderItemsEntity.prototype, "orderDetail", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_inventory_entity_1.ProductInventoryEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", product_inventory_entity_1.ProductInventoryEntity)
], OrderItemsEntity.prototype, "productInventory", void 0);
OrderItemsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_items', synchronize: false })
], OrderItemsEntity);
exports.OrderItemsEntity = OrderItemsEntity;
//# sourceMappingURL=order-items.entity.js.map