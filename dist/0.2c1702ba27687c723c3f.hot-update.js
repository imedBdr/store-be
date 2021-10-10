exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 82:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddSupplierDto = void 0;
class AddSupplierDto {
}
exports.AddSupplierDto = AddSupplierDto;


/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSupplierDto = void 0;
class UpdateSupplierDto {
}
exports.UpdateSupplierDto = UpdateSupplierDto;


/***/ }),

/***/ 78:
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
exports.SupplierController = void 0;
const common_1 = __webpack_require__(6);
const add_supplier_dto_1 = __webpack_require__(82);
const update_supplier_dto_1 = __webpack_require__(83);
const supplier_service_1 = __webpack_require__(77);
let SupplierController = class SupplierController {
    constructor(supplierService) {
        this.supplierService = supplierService;
    }
    async AddSuplier(body) {
        return this.supplierService.AddSuplier(body);
    }
    async GetSupplierById(param) {
        return this.supplierService.GetSupplierById(parseInt(param.id));
    }
    async GetSuppliers() {
        return this.supplierService.GetSuppliers();
    }
    async Update(supplier) {
        return this.supplierService.Update(supplier);
    }
    async Delete(param) {
        return this.supplierService.Delete(parseInt(param.id));
    }
};
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof add_supplier_dto_1.AddSupplierDto !== "undefined" && add_supplier_dto_1.AddSupplierDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "AddSuplier", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "GetSupplierById", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "GetSuppliers", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_supplier_dto_1.UpdateSupplierDto !== "undefined" && update_supplier_dto_1.UpdateSupplierDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "Delete", null);
SupplierController = __decorate([
    (0, common_1.Controller)('supplier'),
    __metadata("design:paramtypes", [typeof (_c = typeof supplier_service_1.SupplierService !== "undefined" && supplier_service_1.SupplierService) === "function" ? _c : Object])
], SupplierController);
exports.SupplierController = SupplierController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a2ed72a087efee6fdfed")
/******/ })();
/******/ 
/******/ }
;