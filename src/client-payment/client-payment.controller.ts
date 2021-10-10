import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientPaymentService } from './client-payment.service';
import { AddClientPaymentDto } from './dto/add-client-payment.dto';
import { ClientPaymentDto } from './dto/client-payment.dto';
import { UpdateClientPaymentDto } from './dto/update-client-payment.dto';

@Controller('client-payment')
export class ClientPaymentController {
  constructor(private readonly clientPaymentService: ClientPaymentService) {}

  @Post('')
  AddClientPayment(
    @Body() body: AddClientPaymentDto,
  ): Promise<AddClientPaymentDto> {
    return this.clientPaymentService.AddClientPayment(body);
  }

  @Get(':id')
  GetClientPaymentById(@Param() param): Promise<ClientPaymentDto> {
    return this.clientPaymentService.GetClientPaymentById(parseInt(param.id));
  }

  @Get('')
  GetClientPayment(): Promise<ClientPaymentDto[]> {
    return this.clientPaymentService.GetClientPayment();
  }

  @Put('')
  async Update(
    @Body()
    body: UpdateClientPaymentDto,
  ): Promise<UpdateClientPaymentDto> {
    return this.clientPaymentService.Update(body);
  }

  @Delete(':id')
  Delete(@Param() param): Promise<number> {
    return this.clientPaymentService.Delete(parseInt(param.id));
  }
}
