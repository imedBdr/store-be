import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tmpdir } from 'os';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { AdministratorEntity } from './administrator.entity';
import { AdministratorDto } from './dto/administrator.dto';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { AdministratorInterface } from './interfaces/Administrator.interface';

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(AdministratorEntity)
    private administratorRepository: Repository<AdministratorEntity>,
  ) {}

  Add = async (admin: CreateAdministratorDto): Promise<AdministratorDto> => {
    let verrifyByEmail: Promise<AdministratorDto> = this.getByEmail(
      admin.email,
    );
    let verrifyByName: Promise<AdministratorDto> = this.getByName(
      admin.username,
    );

    if (verrifyByEmail) throw new ForbiddenException('Email alredy existed');
    else if (verrifyByName)
      throw new ForbiddenException('Username alredy existed');
    else {
      let temp = await this.administratorRepository.save(
        new AdministratorEntity({ ...admin }),
      );
      let { password, ...ret } = temp;
      return ret;
    }
  };

  delete = async (id: number): Promise<DeleteResult> => {
    return await this.administratorRepository.delete({ id: id });
  };

  getById = async (id: number): Promise<AdministratorDto> => {
    let temp = await this.administratorRepository.findOne({ id: id });
    if (temp) {
      let { password, ...ret } = temp;
      return ret;
    } else
      throw new ForbiddenException(
        `Administrator with ID = ${id} does not exist`,
      );
  };

  getByName = async (username: string): Promise<AdministratorDto> => {
    let temp = await this.administratorRepository.findOne({
      username: username,
    });
    if (temp) {
      let { password, ...ret } = temp;
      return ret;
    } else
      throw new ForbiddenException(
        `Administrator with username = ${username} does not exist`,
      );
  };

  getByEmail = async (email: string): Promise<AdministratorDto> => {
    let temp = await this.administratorRepository.findOne({ email: email });
    if (temp) {
      let { password, ...ret } = temp;
      return ret;
    } else
      throw new ForbiddenException(
        `Administrator with email = ${email} does not exist`,
      );
  };

  getAll = async (): Promise<AdministratorDto[]> => {
    let temp = await this.administratorRepository.find();
    if (temp.length > 0)
      return temp.map((e) => {
        let { password, ...ret } = e;
        return ret;
      });
    else return temp;
  };

  update = async (admin: AdministratorEntity): Promise<UpdateResult> => {
    return await this.administratorRepository.update(admin, { id: admin.id });
  };
}
