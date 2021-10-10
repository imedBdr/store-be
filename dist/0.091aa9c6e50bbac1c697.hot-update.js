exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 16:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillModule = void 0;
const common_1 = __webpack_require__(6);
const bill_service_1 = __webpack_require__(17);
const bill_controller_1 = __webpack_require__(33);
const bill_entity_1 = __webpack_require__(19);
const typeorm_1 = __webpack_require__(11);
const bill_item_service_1 = __webpack_require__(18);
let BillModule = class BillModule {
};
BillModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bill_entity_1.BillEntity]), bill_item_service_1.BillItemService],
        providers: [bill_service_1.BillService],
        controllers: [bill_controller_1.BillController],
    })
], BillModule);
exports.BillModule = BillModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5ed1aa48403a5af9def1")
/******/ })();
/******/ 
/******/ }
;