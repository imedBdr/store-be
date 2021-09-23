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
exports.CartEntity = void 0;
const cart_item_entity_1 = require("../cart-item/cart-item.entity");
const client_entity_1 = require("../client/client.entity");
const typeorm_1 = require("typeorm");
let CartEntity = class CartEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "modified_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_item_entity_1.CartItemEntity, (cartItem) => cartItem.cart),
    __metadata("design:type", Array)
], CartEntity.prototype, "cartItems", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.ClientEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", client_entity_1.ClientEntity)
], CartEntity.prototype, "client", void 0);
CartEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'cart', synchronize: false })
], CartEntity);
exports.CartEntity = CartEntity;
//# sourceMappingURL=cart.entity.js.map