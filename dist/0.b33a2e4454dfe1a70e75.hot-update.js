exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 39:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartModule = void 0;
const common_1 = __webpack_require__(6);
const cart_service_1 = __webpack_require__(40);
const cart_controller_1 = __webpack_require__(42);
const typeorm_1 = __webpack_require__(11);
const cart_entity_1 = __webpack_require__(25);
const cart_item_module_1 = __webpack_require__(44);
let CartModule = class CartModule {
};
CartModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cart_entity_1.CartEntity]), cart_item_module_1.CartItemModule],
        providers: [cart_service_1.CartService],
        controllers: [cart_controller_1.CartController],
    })
], CartModule);
exports.CartModule = CartModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d45dcca9b9432d8a5c70")
/******/ })();
/******/ 
/******/ }
;