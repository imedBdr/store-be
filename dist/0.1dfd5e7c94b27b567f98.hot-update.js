exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 66:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderItemsModule = void 0;
const common_1 = __webpack_require__(6);
const order_items_service_1 = __webpack_require__(63);
const order_items_controller_1 = __webpack_require__(67);
const typeorm_1 = __webpack_require__(11);
const order_items_entity_1 = __webpack_require__(29);
let OrderItemsModule = class OrderItemsModule {
};
OrderItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_items_entity_1.OrderItemsEntity])],
        providers: [order_items_service_1.OrderItemsService],
        controllers: [order_items_controller_1.OrderItemsController],
        exports: [order_items_service_1.OrderItemsService],
    })
], OrderItemsModule);
exports.OrderItemsModule = OrderItemsModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c7af2ade35b8f05b934d")
/******/ })();
/******/ 
/******/ }
;