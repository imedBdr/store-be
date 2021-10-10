exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 29:
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
exports.OrderItemsEntity = void 0;
const order_details_entity_1 = __webpack_require__(28);
const product_inventory_entity_1 = __webpack_require__(23);
const typeorm_1 = __webpack_require__(12);
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
], OrderItemsEntity.prototype, "modified_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_details_entity_1.OrderDetailsEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", typeof (_a = typeof order_details_entity_1.OrderDetailsEntity !== "undefined" && order_details_entity_1.OrderDetailsEntity) === "function" ? _a : Object)
], OrderItemsEntity.prototype, "orderDetail", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_inventory_entity_1.ProductInventoryEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", typeof (_b = typeof product_inventory_entity_1.ProductInventoryEntity !== "undefined" && product_inventory_entity_1.ProductInventoryEntity) === "function" ? _b : Object)
], OrderItemsEntity.prototype, "productInventory", void 0);
OrderItemsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_items', synchronize: false })
], OrderItemsEntity);
exports.OrderItemsEntity = OrderItemsEntity;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c21e00d9bc4dc8b0e6f7")
/******/ })();
/******/ 
/******/ }
;