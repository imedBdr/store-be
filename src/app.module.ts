import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdministratorModule } from './administrator/administrator.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillModule } from './bill/bill.module';
import { BillItemModule } from './bill-item/bill-item.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { ClientModule } from './client/client.module';
import { ClientPaymentModule } from './client-payment/client-payment.module';
import { DiscountModule } from './discount/discount.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { PaymentDetailsModule } from './payment-details/payment-details.module';
import { ProductModule } from './product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { ProductInventoryModule } from './product-inventory/product-inventory.module';
import { SupplierModule } from './supplier/supplier.module';
import { AdministratorEntity } from './administrator/administrator.entity';
import { BillEntity } from './bill/bill.entity';
import { BillItemEntity } from './bill-item/bill-item.entity';
import { CartEntity } from './cart/cart.entity';
import { CartItemEntity } from './cart-item/cart-item.entity';
import { ClientEntity } from './client/client.entity';
import { ClientPaymentEntity } from './client-payment/client-payment.entity';
import { DiscountEntity } from './discount/discount.entity';
import { OrderDetailsEntity } from './order-details/order-details.entity';
import { OrderItemsEntity } from './order-items/order-items.entity';
import { PaymentDetailsEntity } from './payment-details/payment-details.entity';
import { ProductEntity } from './product/product.entity';
import { ProductCategoryEntity } from './product-category/product-category.entity';
import { ProductInventoryEntity } from './product-inventory/product-inventory.entity';
import { SupplierEntity } from './supplier/supplier.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'store',
      entities: [
        AdministratorEntity,
        BillEntity,
        BillItemEntity,
        CartEntity,
        CartItemEntity,
        ClientEntity,
        ClientPaymentEntity,
        DiscountEntity,
        OrderDetailsEntity,
        OrderItemsEntity,
        PaymentDetailsEntity,
        ProductEntity,
        ProductCategoryEntity,
        ProductInventoryEntity,
        SupplierEntity,
      ],
      synchronize: true,
    }),
    AdministratorModule,
    BillModule,
    BillItemModule,
    CartModule,
    CartItemModule,
    ClientModule,
    ClientPaymentModule,
    DiscountModule,
    OrderDetailsModule,
    OrderItemsModule,
    PaymentDetailsModule,
    ProductModule,
    ProductCategoryModule,
    ProductInventoryModule,
    SupplierModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
