exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 84:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddOrderDetailDto = void 0;
class AddOrderDetailDto {
    constructor() {
        this.total = 0;
    }
}
exports.AddOrderDetailDto = AddOrderDetailDto;


/***/ }),

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderDetailsController = void 0;
const common_1 = __webpack_require__(6);
const add_order_detail_dto_1 = __webpack_require__(84);
const order_details_service_1 = __webpack_require__(59);
let OrderDetailsController = class OrderDetailsController {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    AddOrderDetails(body) {
        return this.orderDetailsService.AddOrderDetails(body);
    }
    GetById(params) {
        return this.orderDetailsService.GetById(parseInt(params.id));
    }
    GetOrders() {
        return this.orderDetailsService.GetOrders();
    }
    SetTotal(body) {
        this.orderDetailsService.SetTotal(body.id);
    }
    DeleteOrderDetails(params) {
        return this.orderDetailsService.DeleteOrderDetails(parseInt(params.id));
    }
};
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof add_order_detail_dto_1.AddOrderDetailDto !== "undefined" && add_order_detail_dto_1.AddOrderDetailDto) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], OrderDetailsController.prototype, "AddOrderDetails", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], OrderDetailsController.prototype, "GetById", null);
__decorate([
    (0, common_1.Get)('bills'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], OrderDetailsController.prototype, "GetOrders", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "SetTotal", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "DeleteOrderDetails", null);
OrderDetailsController = __decorate([
    (0, common_1.Controller)('order-details'),
    __metadata("design:paramtypes", [typeof (_e = typeof order_details_service_1.OrderDetailsService !== "undefined" && order_details_service_1.OrderDetailsService) === "function" ? _e : Object])
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
/******/ 	__webpack_require__.h = () => ("b0b800d96e5a81d96dc6")
/******/ })();
/******/ 
/******/ }
;