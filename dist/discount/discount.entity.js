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
exports.DiscountEntity = void 0;
const product_inventory_entity_1 = require("../product-inventory/product-inventory.entity");
const typeorm_1 = require("typeorm");
let DiscountEntity = class DiscountEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiscountEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiscountEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiscountEntity.prototype, "discount_percent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], DiscountEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "midified_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_inventory_entity_1.ProductInventoryEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", product_inventory_entity_1.ProductInventoryEntity)
], DiscountEntity.prototype, "productInventory", void 0);
DiscountEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'discount', synchronize: false })
], DiscountEntity);
exports.DiscountEntity = DiscountEntity;
//# sourceMappingURL=discount.entity.js.map