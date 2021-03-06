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
exports.BillItemController = void 0;
const common_1 = require("@nestjs/common");
const bill_item_service_1 = require("./bill-item.service");
const add_bill_item_dto_1 = require("./dto/add-bill-item.dto");
let BillItemController = class BillItemController {
    constructor(billItemService) {
        this.billItemService = billItemService;
    }
    GetById(params) {
        return this.billItemService.GetById(parseInt(params.id));
    }
    AddBillItem(item) {
        return this.billItemService.AddBillItem(item);
    }
    DeleteBillItem(params) {
        return params;
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BillItemController.prototype, "GetById", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_bill_item_dto_1.AddBillItemDto]),
    __metadata("design:returntype", void 0)
], BillItemController.prototype, "AddBillItem", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BillItemController.prototype, "DeleteBillItem", null);
BillItemController = __decorate([
    (0, common_1.Controller)('bill-item'),
    __metadata("design:paramtypes", [bill_item_service_1.BillItemService])
], BillItemController);
exports.BillItemController = BillItemController;
//# sourceMappingURL=bill-item.controller.js.map