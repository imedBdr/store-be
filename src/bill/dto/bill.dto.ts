import { BillItemDto } from 'src/bill-item/dto/bill-item.dto';
import { SupplierDto } from 'src/supplier/dto/supplier.dto';

export class BillDto {
  id: number;

  total: number;

  created_at: number;

  modified_at: number;

  billItems: BillItemDto[];

  supplier: SupplierDto;
}
