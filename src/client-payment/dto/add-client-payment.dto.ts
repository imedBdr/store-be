export class AddClientPaymentDto {
  payment_type: string;

  provider: string;

  account_number: string;

  expiry: number;

  clientId: number;
}
