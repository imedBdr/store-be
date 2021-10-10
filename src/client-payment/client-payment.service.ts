import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/client.entity';
import { Repository } from 'typeorm';
import { ClientPaymentEntity } from './client-payment.entity';
import { AddClientPaymentDto } from './dto/add-client-payment.dto';
import { ClientPaymentDto } from './dto/client-payment.dto';
import { UpdateClientPaymentDto } from './dto/update-client-payment.dto';

@Injectable()
export class ClientPaymentService {
  constructor(
    @InjectRepository(ClientPaymentEntity)
    private readonly clientPaymentRepository: Repository<ClientPaymentEntity>,
  ) {}

  async AddClientPayment(
    clientPayment: AddClientPaymentDto,
  ): Promise<AddClientPaymentDto> {
    try {
      if (await this.CheckExistanceClientPayment(clientPayment)) {
        const payment = new ClientPaymentEntity();
        const client = new ClientEntity();

        client.id = clientPayment.clientId;
        payment.payment_type = clientPayment.payment_type;
        payment.provider = clientPayment.provider;
        payment.account_number = clientPayment.account_number;
        payment.expiry = clientPayment.expiry;
        payment.client = client;

        await this.clientPaymentRepository.save(payment);
        return clientPayment;
      }
    } catch (err) {
      throw new HttpException({ message: err.message }, 500);
    }
  }

  async CheckExistanceClientPayment(
    client: AddClientPaymentDto,
  ): Promise<Boolean> {
    if (
      client.account_number &&
      client.clientId &&
      client.expiry &&
      client.payment_type &&
      client.provider
    ) {
      if (
        (await this.GetClientPaymentByAccount(client.account_number))?.length >
        0
      )
        return false;
      else return true;
    } else throw new HttpException({ message: 'missing informations' }, 500);
  }

  async GetClientPaymentByAccount(
    account: string,
  ): Promise<ClientPaymentDto[]> {
    return await this.clientPaymentRepository.find({ account_number: account });
  }

  async GetClientPaymentById(id: number): Promise<ClientPaymentDto> {
    return await this.clientPaymentRepository.findOne(id);
  }

  async GetClientPayment(): Promise<ClientPaymentDto[]> {
    return await this.clientPaymentRepository.find();
  }

  async Update(
    clientPayment: UpdateClientPaymentDto,
  ): Promise<UpdateClientPaymentDto> {
    try {
      const res = await this.clientPaymentRepository.update(
        clientPayment.id,
        clientPayment,
      );
      if (res.affected > 0) return clientPayment;
      else return null;
    } catch (err) {
      throw new HttpException(
        { err, message: 'error while updating clientpayment' },
        500,
      );
    }
  }

  async Delete(id: number): Promise<number> {
    try {
      const res = await this.clientPaymentRepository.delete(id);
      if (res.affected > 0) return id;
      else return -1;
    } catch (err) {
      throw new HttpException(
        { err, message: 'Error while deleting clientPayment' },
        500,
      );
    }
  }
}
