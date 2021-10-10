import { BillDto } from 'src/bill/dto/bill.dto';

export class SupplierDto {
  id: number;

  first_name: string;

  last_name: string;

  email: string;

  phone_number: string;

  address: string;

  bill: BillDto[];
}
