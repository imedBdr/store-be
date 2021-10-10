import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddPaymentDetailsDto } from './dto/add-payment-details.dto';
import { UpdatePaymentDetailsDto } from './dto/update-payment-details.dto';
import { PaymentDetailsService } from './payment-details.service';

@Controller('payment-details')
export class PaymentDetailsController {
  constructor(private readonly paymentDetailsService: PaymentDetailsService) {}

  @Post('')
  AddPaymentDetails(@Body() body: AddPaymentDetailsDto) {
    this.paymentDetailsService.AddPaymentDetails(body);
  }

  @Get(':id')
  GetPaymentDetailsById(@Param() param) {
    return this.paymentDetailsService.GetPaymentDetailsById(parseInt(param.id));
  }

  @Get('')
  GetPaymentDetails() {
    return this.paymentDetailsService.GetPaymentDetails();
  }

  @Put('')
  Update(@Body() body: UpdatePaymentDetailsDto) {
    return this.paymentDetailsService.Update(body);
  }

  @Delete(':id')
  Delete(@Param() param) {
    return this.paymentDetailsService.Delete(parseInt(param.id));
  }
}
