exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 53:
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
exports.ClientPaymentService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(11);
const typeorm_2 = __webpack_require__(12);
const client_payment_entity_1 = __webpack_require__(27);
let ClientPaymentService = class ClientPaymentService {
    constructor(clientPaymentRepository) {
        this.clientPaymentRepository = clientPaymentRepository;
    }
    async AddClientPayment(client) { }
    async CheckExistanceClientPayment(client) {
        var _a;
        if (client.account_number &&
            client.client &&
            client.expiry &&
            client.payment_type &&
            client.provider) {
            if (((_a = (await this.GetClientPaymentByAccount(client.account_number))) === null || _a === void 0 ? void 0 : _a.length) >
                0)
                throw new common_1.HttpException({ message: 'Client payment alredy exist' }, 500);
            else
                return true;
        }
        else
            throw new common_1.HttpException({ message: 'missing informations' }, 500);
    }
    async GetClientPaymentByAccount(account) {
        return await this.clientPaymentRepository.find({ account_number: account });
    }
};
ClientPaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_payment_entity_1.ClientPaymentEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ClientPaymentService);
exports.ClientPaymentService = ClientPaymentService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1d2bbbbdd9634e9a3a21")
/******/ })();
/******/ 
/******/ }
;