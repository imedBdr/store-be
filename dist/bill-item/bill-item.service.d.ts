import { Repository } from 'typeorm';
import { BillItemEntity } from './bill-item.entity';
import { AddBillItemDto } from './dto/add-bill-item.dto';
import { BillItemDto } from './dto/bill-item.dto';
import { UpdateBillItemDto } from './dto/update-bill-item.dto';
export declare class BillItemService {
    private readonly billItemRepository;
    constructor(billItemRepository: Repository<BillItemEntity>);
    AddBillItem(item: AddBillItemDto): Promise<AddBillItemDto>;
    DeleteBillItem(id: number): Promise<number>;
    Update(item: UpdateBillItemDto): Promise<UpdateBillItemDto>;
    GetById(id: number): Promise<BillItemDto>;
}
