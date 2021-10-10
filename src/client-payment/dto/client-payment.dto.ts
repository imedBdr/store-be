import { ClientDto } from 'src/client/dto/client.dto';

export class ClientPaymentDto {
  id: number;

  payment_type: string;

  provider: string;

  account_number: string;

  expiry: number;

  client: ClientDto;
}
