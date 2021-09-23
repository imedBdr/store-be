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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillEntity = void 0;
const bill_item_entity_1 = require("../bill-item/bill-item.entity");
const supplier_entity_1 = require("../supplier/supplier.entity");
const typeorm_1 = require("typeorm");
let BillEntity = class BillEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BillEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BillEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BillEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BillEntity.prototype, "modified_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => bill_item_entity_1.BillItemEntity, (billItem) => billItem.bill),
    __metadata("design:type", Array)
], BillEntity.prototype, "billItems", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => supplier_entity_1.SupplierEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    __metadata("design:type", supplier_entity_1.SupplierEntity)
], BillEntity.prototype, "supplier", void 0);
BillEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'bill', synchronize: false })
], BillEntity);
exports.BillEntity = BillEntity;
//# sourceMappingURL=bill.entity.js.map