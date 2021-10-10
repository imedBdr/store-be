exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 54:
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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientPaymentController = void 0;
const common_1 = __webpack_require__(6);
const client_payment_service_1 = __webpack_require__(53);
const add_client_payment_dto_1 = __webpack_require__(80);
const update_client_payment_dto_1 = __webpack_require__(81);
let ClientPaymentController = class ClientPaymentController {
    constructor(clientPaymentService) {
        this.clientPaymentService = clientPaymentService;
    }
    AddClientPayment(body) {
        return this.clientPaymentService.AddClientPayment(body);
    }
    GetClientPaymentById(param) {
        return this.clientPaymentService.GetClientPaymentById(parseInt(param.id));
    }
    GetClientPayment() {
        return this.clientPaymentService.GetClientPayment();
    }
    async Update(body) {
        return this.clientPaymentService.Update(body);
    }
    Delete(param) {
        return this.clientPaymentService.Delete(parseInt(param.id));
    }
};
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof add_client_payment_dto_1.AddClientPaymentDto !== "undefined" && add_client_payment_dto_1.AddClientPaymentDto) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ClientPaymentController.prototype, "AddClientPayment", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ClientPaymentController.prototype, "GetClientPaymentById", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ClientPaymentController.prototype, "GetClientPayment", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof update_client_payment_dto_1.UpdateClientPaymentDto !== "undefined" && update_client_payment_dto_1.UpdateClientPaymentDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ClientPaymentController.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ClientPaymentController.prototype, "Delete", null);
ClientPaymentController = __decorate([
    (0, common_1.Controller)('client-payment'),
    __metadata("design:paramtypes", [typeof (_h = typeof client_payment_service_1.ClientPaymentService !== "undefined" && client_payment_service_1.ClientPaymentService) === "function" ? _h : Object])
], ClientPaymentController);
exports.ClientPaymentController = ClientPaymentController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7995e871fd4cb91a9ad")
/******/ })();
/******/ 
/******/ }
;