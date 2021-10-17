import { Injectable } from '@nestjs/common';
import { ClientService } from 'src/client/client.service';
import { AddClientDto } from 'src/client/dto/add-client.dto';

@Injectable()
export class AuthService {
  constructor(private readonly clinetService: ClientService) {}

  async ValidateClient(username: string, pass: string): Promise<any> {
    const client = await this.clinetService.GetClientByName(username);
    if (client && client?.password === pass) {
      const { password, ...rest } = client;
      return rest;
    }
    return null;
  }

  async ClientSignUp(client: AddClientDto): Promise<AddClientDto> {
    return await this.clinetService.AddClient(client);
  }
}
