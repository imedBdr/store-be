import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddPaymentDetailsDto } from './dto/add-payment-details.dto';
import { PaymentDetailsDto } from './dto/payment-details.dto';
import { UpdatePaymentDetailsDto } from './dto/update-payment-details.dto';
import { PaymentDetailsEntity } from './payment-details.entity';

@Injectable()
export class PaymentDetailsService {
  constructor(
    @InjectRepository(PaymentDetailsEntity)
    private readonly paymentDetailsRepository: Repository<PaymentDetailsEntity>,
  ) {}

  async AddPaymentDetails(
    paymentDetails: AddPaymentDetailsDto,
  ): Promise<AddPaymentDetailsDto> {
    try {
      const ret = await this.paymentDetailsRepository.insert(paymentDetails);
      if (ret.raw.affected > 0) return paymentDetails;
      else
        throw new HttpException(
          { message: 'Payment is not added sucssesfully' },
          500,
        );
    } catch (err) {
      throw new HttpException({ message: err.message }, 500);
    }
  }

  async GetPaymentDetailsById(id: number): Promise<PaymentDetailsDto> {
    return await this.paymentDetailsRepository.findOne(id);
  }

  async GetPaymentDetails(): Promise<PaymentDetailsDto[]> {
    return await this.paymentDetailsRepository.find();
  }

  async Update(
    paymentDetails: UpdatePaymentDetailsDto,
  ): Promise<UpdatePaymentDetailsDto> {
    try {
      const res = await this.paymentDetailsRepository.update(
        paymentDetails.id,
        paymentDetails,
      );
      if (res.affected > 0) return paymentDetails;
      else
        throw new HttpException(
          { message: 'Payment is not updated sucssesfully' },
          500,
        );
    } catch (err) {
      throw new HttpException(
        { err, message: 'error while updating Payment' },
        500,
      );
    }
  }

  async Delete(id: number): Promise<number> {
    try {
      const res = await this.paymentDetailsRepository.delete(id);
      if (res.affected > 0) return id;
      else return -1;
    } catch (err) {
      throw new HttpException(
        { err, message: 'Error while deleting Payment' },
        500,
      );
    }
  }
}
