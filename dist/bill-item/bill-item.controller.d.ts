import { BillItemService } from './bill-item.service';
import { AddBillItemDto } from './dto/add-bill-item.dto';
import { BillItemDto } from './dto/bill-item.dto';
export declare class BillItemController {
    private readonly billItemService;
    constructor(billItemService: BillItemService);
    GetById(params: any): Promise<BillItemDto>;
    AddBillItem(item: AddBillItemDto): Promise<AddBillItemDto>;
    DeleteBillItem(params: any): any;
}
