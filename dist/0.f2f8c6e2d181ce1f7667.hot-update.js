exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 50:
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
exports.ClientController = void 0;
const common_1 = __webpack_require__(6);
const client_service_1 = __webpack_require__(49);
const add_client_dto_1 = __webpack_require__(51);
const update_client_dto_1 = __webpack_require__(79);
let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    async AddClient(body) {
        return this.clientService.AddClient(body);
    }
    async GetClientById(param) {
        return this.clientService.GetClientById(parseInt(param.id));
    }
    async GetClients() {
        return this.clientService.GetClients();
    }
    async Update(client) {
        return this.clientService.Update(client);
    }
    async Delete(param) {
        this.clientService.Delete(parseInt(param.id));
    }
};
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof add_client_dto_1.AddClientDto !== "undefined" && add_client_dto_1.AddClientDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "AddClient", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "GetClientById", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "GetClients", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_client_dto_1.UpdateClientDto !== "undefined" && update_client_dto_1.UpdateClientDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "Delete", null);
ClientController = __decorate([
    (0, common_1.Controller)('client'),
    __metadata("design:paramtypes", [typeof (_c = typeof client_service_1.ClientService !== "undefined" && client_service_1.ClientService) === "function" ? _c : Object])
], ClientController);
exports.ClientController = ClientController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ad7309e86da226dc03b7")
/******/ })();
/******/ 
/******/ }
;