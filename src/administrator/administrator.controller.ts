import { Controller, Get, Param } from '@nestjs/common';
import { AdministratorService } from './administrator.service';

@Controller('administrator')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get('/')
  getAll() {
    return this.administratorService.getAll();
  }

  @Get(':id')
  getById(@Param() params) {
    console.log(this.administratorService.getById(parseInt(params.id)));
    return this.administratorService.getById(parseInt(params.id));
  }
}
