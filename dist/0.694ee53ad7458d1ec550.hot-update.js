exports.id = 0;
exports.ids = null;
exports.modules = {

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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(6);
const add_product_dto_1 = __webpack_require__(79);
const product_service_1 = __webpack_require__(76);
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    AddProduct(body) {
        return this.productService.AddProduct(body);
    }
    GetProductById(param) {
        return this.productService.GetProductById(parseInt(param.id));
    }
    GetProducts() {
        return this.productService.GetProducts();
    }
};
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof add_product_dto_1.AddProductDto !== "undefined" && add_product_dto_1.AddProductDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "AddProduct", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "GetProductById", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "GetProducts", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [typeof (_b = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _b : Object])
], ProductController);
exports.ProductController = ProductController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c8b276c745bd24704617")
/******/ })();
/******/ 
/******/ }
;