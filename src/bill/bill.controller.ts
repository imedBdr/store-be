import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BillService } from './bill.service';
import { AddBillDto } from './dto/add-bill.dto';
import { BillDto } from './dto/bill.dto';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post('')
  AddBill(@Body() body: AddBillDto): Promise<BillDto> {
    return this.billService.AddBill(body);
  }

  @Get(':id')
  GetById(@Param() params): Promise<BillDto> {
    return this.billService.GetById(parseInt(params.id));
  }

  @Get('bills')
  GetBills(): Promise<BillDto[]> {
    return this.billService.GetBills();
  }

  @Put('')
  SetTotal(@Body() body) {
    this.billService.SetTotal(body.id);
  }

  @Delete(':id')
  DeleteBill(@Param() params) {
    return this.billService.DeleteBill(parseInt(params.id));
  }
}
