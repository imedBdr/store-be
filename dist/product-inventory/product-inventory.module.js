"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventoryModule = void 0;
const common_1 = require("@nestjs/common");
const product_inventory_service_1 = require("./product-inventory.service");
const product_inventory_controller_1 = require("./product-inventory.controller");
const typeorm_1 = require("@nestjs/typeorm");
const product_inventory_entity_1 = require("./product-inventory.entity");
let ProductInventoryModule = class ProductInventoryModule {
};
ProductInventoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_inventory_entity_1.ProductInventoryEntity])],
        providers: [product_inventory_service_1.ProductInventoryService],
        controllers: [product_inventory_controller_1.ProductInventoryController],
    })
], ProductInventoryModule);
exports.ProductInventoryModule = ProductInventoryModule;
//# sourceMappingURL=product-inventory.module.js.map