exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 59:
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
exports.OrderDetailsService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(11);
const client_entity_1 = __webpack_require__(26);
const typeorm_2 = __webpack_require__(12);
const order_details_entity_1 = __webpack_require__(28);
let OrderDetailsService = class OrderDetailsService {
    constructor(orderDetailsRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
    }
    async AddOrderDetails(order) {
        try {
            const savedOrder = new order_details_entity_1.OrderDetailsEntity();
            const client = new client_entity_1.ClientEntity();
            client.id = order.supplierId;
            savedOrder.total = order.total;
            savedOrder.client = client;
            return await this.orderDetailsRepository.save(savedOrder);
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'Error while adding Order' }, 500);
        }
    }
    async GetById(id) {
        try {
            return await this.orderDetailsRepository.findOne(id, {
                relations: ['client', 'orderItems', 'paymentDetail'],
            });
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'errror while getting bill' }, 500);
        }
    }
    async GetBills() {
        try {
            return await this.billRepository.find();
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'errror while getting bills' }, 500);
        }
    }
    async SetTotal(id) {
        try {
            const bill = await this.GetById(id);
            const billItemsArr = bill.billItems;
            const total = billItemsArr === null || billItemsArr === void 0 ? void 0 : billItemsArr.map((e) => e.price * e.quantity).reduce((prev, current) => prev + current);
            this.billRepository.update(id, { total });
        }
        catch (err) {
            let message;
            if (err.message === 'errror while getting bill')
                message = err.message;
            else
                message = 'errror while updating bill total';
            throw new common_1.HttpException({ message }, 500);
        }
    }
    async DeleteBill(id) {
        try {
            const billItems = (await this.GetById(id)).billItems;
            Promise.all(billItems === null || billItems === void 0 ? void 0 : billItems.map(async (e) => {
                return this.billItemService.DeleteBillItem(e.id);
            }));
        }
        catch (err) {
            if (err.message === 'errror while getting bill')
                throw new common_1.HttpException({ message: err.message }, 500);
        }
        try {
            this.billRepository.delete(id);
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'error while deleting Bill' }, 500);
        }
    }
};
OrderDetailsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_details_entity_1.OrderDetailsEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], OrderDetailsService);
exports.OrderDetailsService = OrderDetailsService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2453f8ea46b9c452cf60")
/******/ })();
/******/ 
/******/ }
;