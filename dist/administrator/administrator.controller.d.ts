import { AdministratorService } from './administrator.service';
export declare class AdministratorController {
    private readonly administratorService;
    constructor(administratorService: AdministratorService);
    getAll(): Promise<import("./dto/administrator.dto").AdministratorDto[]>;
    getById(params: any): Promise<import("./dto/administrator.dto").AdministratorDto>;
}
