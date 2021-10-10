import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { AddClientDto } from './dto/add-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('')
  async AddClient(@Body() body: AddClientDto) {
    return this.clientService.AddClient(body);
  }

  @Get(':id')
  async GetClientById(@Param() param) {
    return this.clientService.GetClientById(parseInt(param.id));
  }

  @Get('')
  async GetClients() {
    return this.clientService.GetClients();
  }

  @Put('')
  async Update(@Body() client: UpdateClientDto) {
    return this.clientService.Update(client);
  }

  @Delete(':id')
  async Delete(@Param() param) {
    return this.clientService.Delete(parseInt(param.id));
  }
}
