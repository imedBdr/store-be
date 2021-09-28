import { AdministratorService } from './administrator.service';
import { AdministratorDto } from './dto/administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
export declare class AdministratorController {
    private readonly administratorService;
    constructor(administratorService: AdministratorService);
    getAll(): Promise<AdministratorDto[]>;
    getById(params: any): Promise<AdministratorDto>;
    Update(body: UpdateAdministratorDto): Promise<UpdateAdministratorDto>;
}
