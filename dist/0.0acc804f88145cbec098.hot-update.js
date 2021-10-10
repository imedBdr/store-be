exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 76:
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(11);
const product_category_entity_1 = __webpack_require__(22);
const typeorm_2 = __webpack_require__(12);
const product_entity_1 = __webpack_require__(21);
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async AddProduct(product) {
        try {
            if (await this.CheckIfExists(product.name))
                throw new common_1.HttpException({ message: 'Product is already exist' }, 500);
            const newProduct = new product_entity_1.ProductEntity();
            const category = new product_category_entity_1.ProductCategoryEntity();
            category.id = product.productCategory;
            newProduct.name = product.name;
            newProduct.description = product.description;
            newProduct.productCategory = category;
            const res = await this.productRepository.save(newProduct);
            if (res)
                return product;
        }
        catch (err) {
            throw new common_1.HttpException({ err, message: 'Error while adding product' }, 500);
        }
    }
    async GetProductByName(name) {
        return await this.productRepository.findOne({ name: name });
    }
    async GetProductById(id) {
        return await this.productRepository.findOne(id);
    }
    async GetProducts() {
        return await this.productRepository.find();
    }
    async CheckIfExists(name) {
        return (await this.GetProductByName(name)) ? true : false;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ProductService);
exports.ProductService = ProductService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c271a38908099c485b93")
/******/ })();
/******/ 
/******/ }
;