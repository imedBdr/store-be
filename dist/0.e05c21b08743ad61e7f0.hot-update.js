exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 35:
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillItemController = void 0;
const common_1 = __webpack_require__(6);
const bill_item_service_1 = __webpack_require__(34);
const add_bill_item_dto_1 = __webpack_require__(36);
let BillItemController = class BillItemController {
    constructor(billItemService) {
        this.billItemService = billItemService;
    }
    GetById(params) {
        return this.billItemService.GetById(parseInt(params.id));
    }
    AddBillItem(item) {
        return this.billItemService.AddBillItem(item);
    }
    DeleteBillItem(params) {
        return this.billItemService.DeleteBillItem(parseInt(params.id));
    }
    Update(body) {
        console.log(body);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], BillItemController.prototype, "GetById", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof add_bill_item_dto_1.AddBillItemDto !== "undefined" && add_bill_item_dto_1.AddBillItemDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], BillItemController.prototype, "AddBillItem", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BillItemController.prototype, "DeleteBillItem", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BillItemController.prototype, "Update", null);
BillItemController = __decorate([
    (0, common_1.Controller)('bill-item'),
    __metadata("design:paramtypes", [typeof (_c = typeof bill_item_service_1.BillItemService !== "undefined" && bill_item_service_1.BillItemService) === "function" ? _c : Object])
], BillItemController);
exports.BillItemController = BillItemController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8f8560dd1e56c9e5f970")
/******/ })();
/******/ 
/******/ }
;