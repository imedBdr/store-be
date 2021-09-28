import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdministratorEntity } from './administrator.entity';
import { AdministratorDto } from './dto/administrator.dto';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';

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

  delete = async (id: number): Promise<number> => {
    try {
      let ret = await this.administratorRepository.delete({ id: id });
      if (ret?.affected > 0) return id;
      else return -1;
    } catch (err) {
      throw new HttpException({ message: `Error while deletting ${id}` }, 500);
    }
  };

  getById = async (id: number): Promise<AdministratorDto> => {
    let temp = await this.administratorRepository.findOne({ id: id });
    if (temp) {
      let { password, ...ret } = temp;
      return ret;
    } else
      throw new HttpException(
        { message: `Administrator with ID = ${id} does not exist` },
        500,
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
      throw new HttpException(
        { message: `Administrator with username = ${username} does not exist` },
        500,
      );
  };

  getByEmail = async (email: string): Promise<AdministratorDto> => {
    let temp = await this.administratorRepository.findOne({ email: email });
    if (temp) {
      let { password, ...ret } = temp;
      return ret;
    } else
      throw new HttpException(
        { message: `Administrator with email = ${email} does not exist` },
        500,
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

  update = async (
    admin: UpdateAdministratorDto,
  ): Promise<UpdateAdministratorDto> => {
    let ret = await this.administratorRepository.update(admin, {
      id: admin.id,
    });
    if (ret.affected > 0) return admin;
    throw new HttpException(
      { message: `Cant update Administrator id = ${admin.id}` },
      500,
    );
  };
}
