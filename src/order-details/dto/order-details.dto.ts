import { ClientDto } from 'src/client/dto/client.dto';
import { OrderItemsDto } from 'src/order-items/dto/order-items.dto';
import { PaymentDetailsDto } from 'src/payment-details/dto/payment-details.dto';

export class OrderDetailsDto {
  id: number;

  total: number;

  created_at: number;

  modified_at: number;

  client: ClientDto;

  orderItems: OrderItemsDto[];

  paymentDetail: PaymentDetailsDto;
}
