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
exports.ClientEntity = void 0;
const cart_entity_1 = require("../cart/cart.entity");
const client_payment_entity_1 = require("../client-payment/client-payment.entity");
const order_details_entity_1 = require("../order-details/order-details.entity");
const typeorm_1 = require("typeorm");
let ClientEntity = class ClientEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClientEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClientEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClientEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClientEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClientEntity.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClientEntity.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClientEntity.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClientEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ClientEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ClientEntity.prototype, "modified_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ClientEntity.prototype, "last_login", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_entity_1.CartEntity, (cart) => cart.client),
    __metadata("design:type", Array)
], ClientEntity.prototype, "carts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => client_payment_entity_1.ClientPaymentEntity, (clientPayment) => clientPayment.client),
    __metadata("design:type", Array)
], ClientEntity.prototype, "clientPayments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_details_entity_1.OrderDetailsEntity, (orderDetail) => orderDetail.client),
    __metadata("design:type", Array)
], ClientEntity.prototype, "orderDetails", void 0);
ClientEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'client', synchronize: false })
], ClientEntity);
exports.ClientEntity = ClientEntity;
//# sourceMappingURL=client.entity.js.map