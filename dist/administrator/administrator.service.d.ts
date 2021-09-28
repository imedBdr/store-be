import { Repository } from 'typeorm';
import { AdministratorEntity } from './administrator.entity';
import { AdministratorDto } from './dto/administrator.dto';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
export declare class AdministratorService {
    private administratorRepository;
    constructor(administratorRepository: Repository<AdministratorEntity>);
    Add: (admin: CreateAdministratorDto) => Promise<AdministratorDto>;
    delete: (id: number) => Promise<number>;
    getById: (id: number) => Promise<AdministratorDto>;
    getByName: (username: string) => Promise<AdministratorDto>;
    getByEmail: (email: string) => Promise<AdministratorDto>;
    getAll: () => Promise<AdministratorDto[]>;
    update: (admin: UpdateAdministratorDto) => Promise<UpdateAdministratorDto>;
}
