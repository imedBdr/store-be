"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillItemModule = void 0;
const common_1 = require("@nestjs/common");
const bill_item_service_1 = require("./bill-item.service");
const bill_item_controller_1 = require("./bill-item.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bill_item_entity_1 = require("./bill-item.entity");
let BillItemModule = class BillItemModule {
};
BillItemModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bill_item_entity_1.BillItemEntity])],
        providers: [bill_item_service_1.BillItemService],
        controllers: [bill_item_controller_1.BillItemController],
    })
], BillItemModule);
exports.BillItemModule = BillItemModule;
//# sourceMappingURL=bill-item.module.js.map