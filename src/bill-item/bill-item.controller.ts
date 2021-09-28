import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BillItemService } from './bill-item.service';
import { AddBillItemDto } from './dto/add-bill-item.dto';
import { BillItemDto } from './dto/bill-item.dto';
import { UpdateBillItemDto } from './dto/update-bill-item.dto';

@Controller('bill-item')
export class BillItemController {
  constructor(private readonly billItemService: BillItemService) {}

  @Get(':id')
  GetById(@Param() params): Promise<BillItemDto> {
    return this.billItemService.GetById(parseInt(params.id));
  }

  @Post('')
  AddBillItem(@Body() item: AddBillItemDto) {
    return this.billItemService.AddBillItem(item);
  }

  @Delete(':id')
  DeleteBillItem(@Param() params) {
    return this.billItemService.DeleteBillItem(parseInt(params.id));
  }

  @Put('')
  Update(@Body() body: UpdateBillItemDto) {
    return this.billItemService.Update(body);
  }
}
