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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorController = void 0;
const common_1 = require("@nestjs/common");
const administrator_service_1 = require("./administrator.service");
let AdministratorController = class AdministratorController {
    constructor(administratorService) {
        this.administratorService = administratorService;
    }
    getAll() {
        return this.administratorService.getAll();
    }
    getById(params) {
        console.log(this.administratorService.getById(parseInt(params.id)));
        return this.administratorService.getById(parseInt(params.id));
    }
    Update(body) {
        return this.administratorService.update(body);
    }
};
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdministratorController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdministratorController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdministratorController.prototype, "Update", null);
AdministratorController = __decorate([
    (0, common_1.Controller)('administrator'),
    __metadata("design:paramtypes", [administrator_service_1.AdministratorService])
], AdministratorController);
exports.AdministratorController = AdministratorController;
//# sourceMappingURL=administrator.controller.js.map