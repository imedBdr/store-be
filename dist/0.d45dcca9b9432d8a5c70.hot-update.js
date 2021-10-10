exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 40:
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
exports.CartService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(11);
const cart_item_service_1 = __webpack_require__(41);
const client_entity_1 = __webpack_require__(26);
const typeorm_2 = __webpack_require__(12);
const cart_entity_1 = __webpack_require__(25);
let CartService = class CartService {
    constructor(cartItemService, cartRepository) {
        this.cartItemService = cartItemService;
        this.cartRepository = cartRepository;
    }
    async AddCart(cart) {
        try {
            const savedCart = new cart_entity_1.CartEntity();
            const client = new client_entity_1.ClientEntity();
            client.id = cart.clientId;
            savedCart.total = cart.total;
            savedCart.client = client;
            return await this.cartRepository.save(savedCart);
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'Error while adding Cart' }, 500);
        }
    }
    async GetById(id) {
        try {
            return await this.cartRepository.findOne(id, {
                relations: ['cartItems', 'client'],
            });
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'errror while getting cart' }, 500);
        }
    }
    async GetCarts() {
        try {
            return await this.cartRepository.find();
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'errror while getting carts' }, 500);
        }
    }
    async SetTotal(id) {
        try {
            const cart = await this.GetById(id);
            const cartItemsArr = cart.cartItems;
            const total = cartItemsArr === null || cartItemsArr === void 0 ? void 0 : cartItemsArr.map((e) => e.price * e.quantity).reduce((prev, current) => prev + current);
            this.cartRepository.update(id, { total });
        }
        catch (err) {
            let message;
            if (err.message === 'errror while getting cart')
                message = err.message;
            else
                message = 'errror while updating cart total';
            throw new common_1.HttpException({ message }, 500);
        }
    }
    async DeleteCart(id) {
        try {
            const cartItems = (await this.GetById(id)).cartItems;
            Promise.all(cartItems === null || cartItems === void 0 ? void 0 : cartItems.map(async (e) => {
                return this.cartItemService.DeleteCartItem(e.id);
            }));
        }
        catch (err) {
            if (err.message === 'errror while getting cart')
                throw new common_1.HttpException({ message: err.message }, 500);
        }
        try {
            this.cartRepository.delete(id);
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'error while deleting cart' }, 500);
        }
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(cart_entity_1.CartEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof cart_item_service_1.CartItemService !== "undefined" && cart_item_service_1.CartItemService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], CartService);
exports.CartService = CartService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b7fe65e4088cd2d335fd")
/******/ })();
/******/ 
/******/ }
;