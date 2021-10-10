import { OrderDetailsDto } from 'src/order-details/dto/order-details.dto';

export class PaymentDetailsDto {
  id: number;

  amount: number;

  provider: string;

  status: string;

  created_at: number;

  midified_at: number;

  orderDetails: OrderDetailsDto[];
}
