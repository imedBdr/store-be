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
exports.ProductEntity = void 0;
const bill_item_entity_1 = require("../bill-item/bill-item.entity");
const product_category_entity_1 = require("../product-category/product-category.entity");
const product_inventory_entity_1 = require("../product-inventory/product-inventory.entity");
const typeorm_1 = require("typeorm");
let ProductEntity = class ProductEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bill_item_entity_1.BillItemEntity, (BillItem) => BillItem.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "BillItems", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_category_entity_1.ProductCategoryEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", product_category_entity_1.ProductCategoryEntity)
], ProductEntity.prototype, "productCategory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_inventory_entity_1.ProductInventoryEntity, (productInventory) => productInventory.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "productInventories", void 0);
ProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product', synchronize: false })
], ProductEntity);
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=product.entity.js.map