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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bill_entity_1 = require("../bill/bill.entity");
const product_entity_1 = require("../product/product.entity");
const typeorm_2 = require("typeorm");
const bill_item_entity_1 = require("./bill-item.entity");
let BillItemService = class BillItemService {
    constructor(billItemRepository) {
        this.billItemRepository = billItemRepository;
    }
    async AddBillItem(item) {
        try {
            const product = new product_entity_1.ProductEntity();
            const data = new bill_item_entity_1.BillItemEntity();
            const bill = new bill_entity_1.BillEntity();
            bill.id = item.billId;
            product.id = item.productId;
            data.product = product;
            data.bill = bill;
            data.price = item.price;
            data.quantity = item.quantity;
            await this.billItemRepository.save(data);
            return item;
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'Error while adding BillItem' }, 500);
        }
    }
    async DeleteBillItem(id) {
        try {
            const ret = await this.billItemRepository.delete(id);
            if (ret.affected)
                return id;
            else
                return -1;
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'Error while deleting BillItem' }, 500);
        }
    }
    async Update(item) {
        try {
            const ret = await this.billItemRepository.update(item.id, item);
            if (ret.affected > 0)
                return item;
            else
                throw new common_1.HttpException({ message: 'Bill Item did not update' }, 500);
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'Error while updating Bill item' }, 500);
        }
    }
    async GetById(id) {
        try {
            const ret = await this.billItemRepository.findOne(id, {
                relations: ['product'],
            });
            if (ret)
                return ret;
            else
                throw new common_1.HttpException({ message: `Cant find bill item id = ${id}` }, 500);
        }
        catch (err) {
            throw new common_1.HttpException({ err: err, message: 'Error while finding bill item' }, 500);
        }
    }
};
BillItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bill_item_entity_1.BillItemEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BillItemService);
exports.BillItemService = BillItemService;
//# sourceMappingURL=bill-item.service.js.map