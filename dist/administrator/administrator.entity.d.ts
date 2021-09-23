export declare class AdministratorEntity {
    id: number;
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    last_login: number;
    created_at: number;
    modified_at: number;
    constructor(partial: Partial<AdministratorEntity>);
}
