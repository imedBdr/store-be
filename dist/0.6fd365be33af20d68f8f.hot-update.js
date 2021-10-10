exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 44:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartItemModule = void 0;
const common_1 = __webpack_require__(6);
const cart_item_service_1 = __webpack_require__(41);
const cart_item_controller_1 = __webpack_require__(45);
const typeorm_1 = __webpack_require__(11);
const cart_item_entity_1 = __webpack_require__(24);
let CartItemModule = class CartItemModule {
};
CartItemModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cart_item_entity_1.CartItemEntity])],
        providers: [cart_item_service_1.CartItemService],
        controllers: [cart_item_controller_1.CartItemController],
        exports: [cart_item_service_1.CartItemService],
    })
], CartItemModule);
exports.CartItemModule = CartItemModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("840e5fe4f8e2b56f0878")
/******/ })();
/******/ 
/******/ }
;