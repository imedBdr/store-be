import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientEntity } from './client.entity';
import { AddClientDto } from './dto/add-client.dto';
import { ClientExistanceDto } from './dto/client-existance.dto';
import { ClientDto } from './dto/client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async AddClient(client: AddClientDto): Promise<AddClientDto> {
    try {
      if (client.email && client.password && client.username) {
        await this.CheckIfExist(client);
        const res = await this.clientRepository.insert(client);
        if (res.raw.insertId) return client;
        else
          throw new HttpException(
            { message: 'Error while Adding clinet' },
            500,
          );
      } else
        throw new HttpException({ message: 'Error while Adding clinet' }, 500);
    } catch (err) {
      throw new HttpException(err.message, 500);
    }
  }

  async CheckIfExist(client: ClientExistanceDto): Promise<boolean> {
    // 0 name 1 email 2 both -1 none
    let email = [],
      username = [];
    username = await this.clientRepository.find({ username: client.username });
    email = await this.clientRepository.find({ email: client.email });
    if (username.length > 0 && email.length > 0)
      throw new HttpException(
        { message: 'Email and username are alredy exist' },
        500,
      );
    else if (email.length > 0)
      throw new HttpException({ message: 'Email is alredy exist' }, 500);
    else if (username.length > 0)
      throw new HttpException({ message: 'Username is alredy exist' }, 500);
    else return true;
  }

  async GetClientById(id: number): Promise<ClientDto> {
    const client = await this.clientRepository.findOne(id, {
      relations: ['carts', 'clientPayments', 'orderDetails'],
    });
    if (client) {
      const { password, ...rest } = client;
      return rest;
    }
    throw new HttpException({ message: 'User not found' }, 500);
  }

  async GetClients(): Promise<ClientDto[]> {
    const arr = await this.clientRepository.find();
    return arr.map((e) => {
      let { password, ...ret } = e;
      return ret;
    });
  }

  async Update(client: UpdateClientDto): Promise<UpdateClientDto> {
    const res = await this.clientRepository.update(client.id, client);
    if (res.affected > 0) return client;
    else return null;
  }

  async Delete(id: number): Promise<number> {
    try {
      const res = await this.clientRepository.delete(id);
      return res?.affected > 0 ? id : -1;
    } catch (err) {
      return -1;
    }
  }
}
