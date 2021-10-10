exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 49:
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
exports.ClientService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(11);
const typeorm_2 = __webpack_require__(12);
const client_entity_1 = __webpack_require__(26);
let ClientService = class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async AddClient(client) {
        try {
            if (client.email && client.password && client.username) {
                await this.CheckIfExist(client);
                const res = await this.clientRepository.insert(client);
                if (res.raw.insertId)
                    return client;
                else
                    throw new common_1.HttpException({ message: 'Error while Adding clinet' }, 500);
            }
        }
        catch (err) {
            console.log(err);
            throw new common_1.HttpException({ message: 'nik zebi' }, 500);
        }
    }
    async CheckIfExist(client) {
        let email = [], username = [];
        username = await this.clientRepository.find({ username: client.username });
        email = await this.clientRepository.find({ email: client.email });
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
        const _a = await this.clientRepository.findOne(id), { password } = _a, rest = __rest(_a, ["password"]);
        return rest;
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
ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.ClientEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ClientService);
exports.ClientService = ClientService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9f1c88646828810deb39")
/******/ })();
/******/ 
/******/ }
;