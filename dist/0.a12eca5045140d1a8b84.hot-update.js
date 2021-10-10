exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 28:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderDetailsEntity = void 0;
const client_entity_1 = __webpack_require__(26);
const order_items_entity_1 = __webpack_require__(29);
const payment_details_entity_1 = __webpack_require__(30);
const typeorm_1 = __webpack_require__(12);
let OrderDetailsEntity = class OrderDetailsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderDetailsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderDetailsEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderDetailsEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderDetailsEntity.prototype, "modified_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.ClientEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", typeof (_a = typeof client_entity_1.ClientEntity !== "undefined" && client_entity_1.ClientEntity) === "function" ? _a : Object)
], OrderDetailsEntity.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_items_entity_1.OrderItemsEntity, (orderItem) => orderItem.orderDetail),
    __metadata("design:type", Array)
], OrderDetailsEntity.prototype, "orderItems", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_details_entity_1.PaymentDetailsEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", typeof (_b = typeof payment_details_entity_1.PaymentDetailsEntity !== "undefined" && payment_details_entity_1.PaymentDetailsEntity) === "function" ? _b : Object)
], OrderDetailsEntity.prototype, "paymentDetail", void 0);
OrderDetailsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_details', synchronize: false })
], OrderDetailsEntity);
exports.OrderDetailsEntity = OrderDetailsEntity;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("809ec7288e4bdab27900")
/******/ })();
/******/ 
/******/ }
;