exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 77:
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupplierService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(11);
const typeorm_2 = __webpack_require__(12);
const supplier_entity_1 = __webpack_require__(32);
let SupplierService = class SupplierService {
    constructor(supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    async AddClient(supplier) {
        try {
            if (supplier.email && supplier.password && supplier.username) {
                await this.CheckIfExist(supplier);
                const res = await this.supplierRepository.insert(supplier);
                if (res.raw.insertId)
                    return supplier;
                else
                    throw new common_1.HttpException({ message: 'Error while Adding clinet' }, 500);
            }
            else
                throw new common_1.HttpException({ message: 'Error while Adding supplier' }, 500);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, 500);
        }
    }
    async CheckIfExist(supplier) {
        let email = [], username = [];
        username = await this.supplierRepository.find({
            username: supplier.username,
        });
        email = await this.supplierRepository.find({ email: supplier.email });
        if (username.length > 0 && email.length > 0)
            throw new common_1.HttpException({ message: 'Email and username are alredy exist' }, 500);
        else if (email.length > 0)
            throw new common_1.HttpException({ message: 'Email is alredy exist' }, 500);
        else if (username.length > 0)
            throw new common_1.HttpException({ message: 'Username is alredy exist' }, 500);
        else
            return true;
    }
    async GetClientById(id) {
        const client = await this.clientRepository.findOne(id, {
            relations: ['carts', 'clientPayments', 'orderDetails'],
        });
        if (client) {
            const { password } = client, rest = __rest(client, ["password"]);
            return rest;
        }
        throw new common_1.HttpException({ message: 'User not found' }, 500);
    }
    async GetClients() {
        const arr = await this.clientRepository.find();
        return arr.map((e) => {
            let { password } = e, ret = __rest(e, ["password"]);
            return ret;
        });
    }
    async Update(client) {
        const res = await this.clientRepository.update(client.id, client);
        if (res.affected > 0)
            return client;
        else
            return null;
    }
    async Delete(id) {
        try {
            const res = await this.clientRepository.delete(id);
            return (res === null || res === void 0 ? void 0 : res.affected) > 0 ? id : -1;
        }
        catch (err) {
            return -1;
        }
    }
};
SupplierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_entity_1.SupplierEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SupplierService);
exports.SupplierService = SupplierService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8929b89cafe0896c545f")
/******/ })();
/******/ 
/******/ }
;