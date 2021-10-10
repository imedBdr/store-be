exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 85:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddOrderItemDto = void 0;
class AddOrderItemDto {
}
exports.AddOrderItemDto = AddOrderItemDto;


/***/ }),

/***/ 86:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrderItemDto = void 0;
class UpdateOrderItemDto {
}
exports.UpdateOrderItemDto = UpdateOrderItemDto;


/***/ }),

/***/ 63:
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderItemsController = void 0;
const common_1 = __webpack_require__(6);
const add_order_item_dto_1 = __webpack_require__(85);
const update_order_item_dto_1 = __webpack_require__(86);
const order_items_service_1 = __webpack_require__(62);
let OrderItemsController = class OrderItemsController {
    constructor(orderItemsService) {
        this.orderItemsService = orderItemsService;
    }
    GetById(params) {
        return this.orderItemsService.GetById(parseInt(params.id));
    }
    AddOrderItem(item) {
        return this.orderItemsService.AddOrderItem(item);
    }
    DeleteOrderItem(params) {
        return this.orderItemsService.DeleteOrderItem(parseInt(params.id));
    }
    Update(body) {
        return this.orderItemsService.Update(body);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], OrderItemsController.prototype, "GetById", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof add_order_item_dto_1.AddOrderItemDto !== "undefined" && add_order_item_dto_1.AddOrderItemDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], OrderItemsController.prototype, "AddOrderItem", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderItemsController.prototype, "DeleteOrderItem", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_order_item_dto_1.UpdateOrderItemDto !== "undefined" && update_order_item_dto_1.UpdateOrderItemDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], OrderItemsController.prototype, "Update", null);
OrderItemsController = __decorate([
    (0, common_1.Controller)('order-items'),
    __metadata("design:paramtypes", [typeof (_d = typeof order_items_service_1.OrderItemsService !== "undefined" && order_items_service_1.OrderItemsService) === "function" ? _d : Object])
], OrderItemsController);
exports.OrderItemsController = OrderItemsController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7613b9180cb0b19dc77")
/******/ })();
/******/ 
/******/ }
;