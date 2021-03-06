"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const administrator_entity_1 = require("./administrator.entity");
let AdministratorService = class AdministratorService {
    constructor(administratorRepository) {
        this.administratorRepository = administratorRepository;
        this.Add = async (admin) => {
            let verrifyByEmail = this.getByEmail(admin.email);
            let verrifyByName = this.getByName(admin.username);
            if (verrifyByEmail)
                throw new common_1.ForbiddenException('Email alredy existed');
            else if (verrifyByName)
                throw new common_1.ForbiddenException('Username alredy existed');
            else {
                let temp = await this.administratorRepository.save(new administrator_entity_1.AdministratorEntity(Object.assign({}, admin)));
                let { password } = temp, ret = __rest(temp, ["password"]);
                return ret;
            }
        };
        this.delete = async (id) => {
            try {
                let ret = await this.administratorRepository.delete({ id: id });
                if ((ret === null || ret === void 0 ? void 0 : ret.affected) > 0)
                    return id;
                else
                    return -1;
            }
            catch (err) {
                throw new common_1.HttpException({ message: `Error while deletting ${id}` }, 500);
            }
        };
        this.getById = async (id) => {
            let temp = await this.administratorRepository.findOne({ id: id });
            if (temp) {
                let { password } = temp, ret = __rest(temp, ["password"]);
                return ret;
            }
            else
                throw new common_1.HttpException({ message: `Administrator with ID = ${id} does not exist` }, 500);
        };
        this.getByName = async (username) => {
            let temp = await this.administratorRepository.findOne({
                username: username,
            });
            if (temp) {
                let { password } = temp, ret = __rest(temp, ["password"]);
                return ret;
            }
            else
                throw new common_1.HttpException({ message: `Administrator with username = ${username} does not exist` }, 500);
        };
        this.getByEmail = async (email) => {
            let temp = await this.administratorRepository.findOne({ email: email });
            if (temp) {
                let { password } = temp, ret = __rest(temp, ["password"]);
                return ret;
            }
            else
                throw new common_1.HttpException({ message: `Administrator with email = ${email} does not exist` }, 500);
        };
        this.getAll = async () => {
            let temp = await this.administratorRepository.find();
            if (temp.length > 0)
                return temp.map((e) => {
                    let { password } = e, ret = __rest(e, ["password"]);
                    return ret;
                });
            else
                return temp;
        };
        this.update = async (admin) => {
            let ret = await this.administratorRepository.update(admin, {
                id: admin.id,
            });
            if (ret.affected > 0)
                return admin;
            throw new common_1.HttpException({ message: `Cant update Administrator id = ${admin.id}` }, 500);
        };
    }
};
AdministratorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(administrator_entity_1.AdministratorEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdministratorService);
exports.AdministratorService = AdministratorService;
//# sourceMappingURL=administrator.service.js.map