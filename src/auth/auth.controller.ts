import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AddClientDto } from 'src/client/dto/add-client.dto';
import { AuthService } from './auth.service';
import { NonConnectedClientGuard } from './guards/non-connected-client.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('client/login')
  async ClientLogin(@Request() req) {
    return req.client;
  }

  @UseGuards(NonConnectedClientGuard)
  @Post('client/singup')
  async ClientSignUp(@Body() body: AddClientDto) {
    return await this.authService.ClientSignUp(body);
  }
}
