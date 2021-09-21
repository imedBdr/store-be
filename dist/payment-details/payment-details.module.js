"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const payment_details_service_1 = require("./payment-details.service");
const payment_details_controller_1 = require("./payment-details.controller");
const typeorm_1 = require("@nestjs/typeorm");
const payment_details_entity_1 = require("./payment-details.entity");
let PaymentDetailsModule = class PaymentDetailsModule {
};
PaymentDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([payment_details_entity_1.PaymentDetailsEntity])],
        providers: [payment_details_service_1.PaymentDetailsService],
        controllers: [payment_details_controller_1.PaymentDetailsController],
    })
], PaymentDetailsModule);
exports.PaymentDetailsModule = PaymentDetailsModule;
//# sourceMappingURL=payment-details.module.js.map