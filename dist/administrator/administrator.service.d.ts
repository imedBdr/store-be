import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AdministratorEntity } from './administrator.entity';
import { AdministratorDto } from './dto/administrator.dto';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
export declare class AdministratorService {
    private administratorRepository;
    constructor(administratorRepository: Repository<AdministratorEntity>);
    Add: (admin: CreateAdministratorDto) => Promise<AdministratorDto>;
    delete: (id: number) => Promise<DeleteResult>;
    getById: (id: number) => Promise<AdministratorDto>;
    getByName: (username: string) => Promise<AdministratorDto>;
    getByEmail: (email: string) => Promise<AdministratorDto>;
    getAll: () => Promise<AdministratorDto[]>;
    update: (admin: AdministratorEntity) => Promise<UpdateResult>;
}
