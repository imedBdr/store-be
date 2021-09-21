"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const administrator_module_1 = require("./administrator/administrator.module");
const typeorm_1 = require("@nestjs/typeorm");
const bill_module_1 = require("./bill/bill.module");
const bill_item_module_1 = require("./bill-item/bill-item.module");
const cart_module_1 = require("./cart/cart.module");
const cart_item_module_1 = require("./cart-item/cart-item.module");
const client_module_1 = require("./client/client.module");
const client_payment_module_1 = require("./client-payment/client-payment.module");
const discount_module_1 = require("./discount/discount.module");
const order_details_module_1 = require("./order-details/order-details.module");
const order_items_module_1 = require("./order-items/order-items.module");
const payment_details_module_1 = require("./payment-details/payment-details.module");
const product_module_1 = require("./product/product.module");
const product_category_module_1 = require("./product-category/product-category.module");
const product_inventory_module_1 = require("./product-inventory/product-inventory.module");
const supplier_module_1 = require("./supplier/supplier.module");
const administrator_entity_1 = require("./administrator/administrator.entity");
const bill_entity_1 = require("./bill/bill.entity");
const bill_item_entity_1 = require("./bill-item/bill-item.entity");
const cart_entity_1 = require("./cart/cart.entity");
const cart_item_entity_1 = require("./cart-item/cart-item.entity");
const client_entity_1 = require("./client/client.entity");
const client_payment_entity_1 = require("./client-payment/client-payment.entity");
const discount_entity_1 = require("./discount/discount.entity");
const order_details_entity_1 = require("./order-details/order-details.entity");
const order_items_entity_1 = require("./order-items/order-items.entity");
const payment_details_entity_1 = require("./payment-details/payment-details.entity");
const product_entity_1 = require("./product/product.entity");
const product_category_entity_1 = require("./product-category/product-category.entity");
const product_inventory_entity_1 = require("./product-inventory/product-inventory.entity");
const supplier_entity_1 = require("./supplier/supplier.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'test',
                password: 'test',
                database: 'store',
                entities: [
                    administrator_entity_1.AdministratorEntity,
                    bill_entity_1.BillEntity,
                    bill_item_entity_1.BillItemEntity,
                    cart_entity_1.CartEntity,
                    cart_item_entity_1.CartItemEntity,
                    client_entity_1.ClientEntity,
                    client_payment_entity_1.ClientPaymentEntity,
                    discount_entity_1.DiscountEntity,
                    order_details_entity_1.OrderDetailsEntity,
                    order_items_entity_1.OrderItemsEntity,
                    payment_details_entity_1.PaymentDetailsEntity,
                    product_entity_1.ProductEntity,
                    product_category_entity_1.ProductCategoryEntity,
                    product_inventory_entity_1.ProductInventoryEntity,
                    supplier_entity_1.SupplierEntity,
                ],
                synchronize: true,
            }),
            administrator_module_1.AdministratorModule,
            bill_module_1.BillModule,
            bill_item_module_1.BillItemModule,
            cart_module_1.CartModule,
            cart_item_module_1.CartItemModule,
            client_module_1.ClientModule,
            client_payment_module_1.ClientPaymentModule,
            discount_module_1.DiscountModule,
            order_details_module_1.OrderDetailsModule,
            order_items_module_1.OrderItemsModule,
            payment_details_module_1.PaymentDetailsModule,
            product_module_1.ProductModule,
            product_category_module_1.ProductCategoryModule,
            product_inventory_module_1.ProductInventoryModule,
            supplier_module_1.SupplierModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map