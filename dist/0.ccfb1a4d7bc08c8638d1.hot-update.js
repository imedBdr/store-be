exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 60:
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderDetailsController = void 0;
const common_1 = __webpack_require__(6);
const order_details_service_1 = __webpack_require__(59);
let OrderDetailsController = class OrderDetailsController {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
};
OrderDetailsController = __decorate([
    (0, common_1.Controller)('order-details'),
    __metadata("design:paramtypes", [typeof (_a = typeof order_details_service_1.OrderDetailsService !== "undefined" && order_details_service_1.OrderDetailsService) === "function" ? _a : Object])
], OrderDetailsController);
exports.OrderDetailsController = OrderDetailsController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("08ef01f7a84c9654583b")
/******/ })();
/******/ 
/******/ }
;