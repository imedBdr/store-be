import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorDto } from './dto/administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';

@Controller('administrator')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get('')
  getAll(): Promise<AdministratorDto[]> {
    return this.administratorService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Promise<AdministratorDto> {
    console.log(this.administratorService.getById(parseInt(params.id)));
    return this.administratorService.getById(parseInt(params.id));
  }

  @Put('')
  Update(
    @Body() body: UpdateAdministratorDto,
  ): Promise<UpdateAdministratorDto> {
    return this.administratorService.update(body);
  }
}
