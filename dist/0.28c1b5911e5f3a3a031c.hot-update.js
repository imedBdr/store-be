exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 58:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderDetailsModule = void 0;
const common_1 = __webpack_require__(6);
const order_details_service_1 = __webpack_require__(59);
const order_details_controller_1 = __webpack_require__(60);
const typeorm_1 = __webpack_require__(11);
const order_details_entity_1 = __webpack_require__(28);
const order_items_module_1 = __webpack_require__(61);
let OrderDetailsModule = class OrderDetailsModule {
};
OrderDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_details_entity_1.OrderDetailsEntity]), order_items_module_1.OrderItemsModule],
        providers: [order_details_service_1.OrderDetailsService],
        controllers: [order_details_controller_1.OrderDetailsController],
    })
], OrderDetailsModule);
exports.OrderDetailsModule = OrderDetailsModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("27fc4567bd6c4e9e104c")
/******/ })();
/******/ 
/******/ }
;