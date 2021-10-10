exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 62:
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
exports.OrderItemsService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(11);
const order_details_entity_1 = __webpack_require__(28);
const product_inventory_entity_1 = __webpack_require__(23);
const typeorm_2 = __webpack_require__(12);
const order_items_entity_1 = __webpack_require__(29);
let OrderItemsService = class OrderItemsService {
    constructor(orderItemsRepository) {
        this.orderItemsRepository = orderItemsRepository;
    }
    async AddOrderItem(item) {
        try {
            const productInvnetory = new product_inventory_entity_1.ProductInventoryEntity();
            const data = new order_items_entity_1.OrderItemsEntity();
            const order = new order_details_entity_1.OrderDetailsEntity();
            order.id = item.orderDetialId;
            productInvnetory.id = item.productInventoryId;
            data.productInventory = productInvnetory;
            data.orderDetail = order;
            data.price = item.price;
            data.quantity = item.quantity;
            await this.orderItemsRepository.save(data);
            return item;
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'Error while adding OrderItem' }, 500);
        }
    }
    async DeleteBillItem(id) {
        try {
            const ret = await this.orderItemsRepository.delete(id);
            if (ret.affected)
                return id;
            else
                return -1;
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'Error while deleting OrderItem' }, 500);
        }
    }
    async Update(item) {
        try {
            const ret = await this.orderItemsRepository.update(item.id, item);
            if (ret.affected > 0)
                return item;
            else
                throw new common_1.HttpException({ message: 'OrderItem did not update' }, 500);
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'Error while updating OrderItem' }, 500);
        }
    }
    async GetById(id) {
        try {
            const ret = await this.orderItemsRepository.findOne(id, {
                relations: ['productInventory'],
            });
            if (ret)
                return ret;
            else
                throw new common_1.HttpException({ message: `Cant find bill item id = ${id}` }, 500);
        }
        catch (err) {
            throw new common_1.HttpException({ err: err, message: 'Error while finding bill item' }, 500);
        }
    }
};
OrderItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_items_entity_1.OrderItemsEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], OrderItemsService);
exports.OrderItemsService = OrderItemsService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("50ab08f7e89c70715fad")
/******/ })();
/******/ 
/******/ }
;