export class UpdateClientPaymentDto {
  id: number;

  payment_type: string;

  provider: string;

  account_number: string;

  expiry: number;
}
