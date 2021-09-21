import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorEntity } from './administrator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdministratorEntity])],
  providers: [AdministratorService],
  controllers: [AdministratorController],
})
export class AdministratorModule {}
