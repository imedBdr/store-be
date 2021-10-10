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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductCategoryModule = void 0;
const common_1 = __webpack_require__(6);
const product_category_service_1 = __webpack_require__(79);
const product_category_controller_1 = __webpack_require__(80);
const typeorm_1 = __webpack_require__(11);
const product_category_entity_1 = __webpack_require__(22);
let ProductCategoryModule = class ProductCategoryModule {
};
ProductCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_category_entity_1.ProductCategoryEntity])],
        providers: [product_category_service_1.ProductCategoryService],
        controllers: [product_category_controller_1.ProductCategoryController],
        exports: [product_category_service_1.ProductCategoryService],
    })
], ProductCategoryModule);
exports.ProductCategoryModule = ProductCategoryModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8b53856b610b926cdf98")
/******/ })();
/******/ 
/******/ }
;