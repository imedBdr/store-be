exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 50:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientController = void 0;
const common_1 = __webpack_require__(6);
const client_service_1 = __webpack_require__(49);
let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
};
ClientController = __decorate([
    (0, common_1.Controller)('client'),
    __metadata("design:paramtypes", [typeof (_a = typeof client_service_1.ClientService !== "undefined" && client_service_1.ClientService) === "function" ? _a : Object])
], ClientController);
exports.ClientController = ClientController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eb5a209611c2a56b8228")
/******/ })();
/******/ 
/******/ }
;