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
Object.defineProperty(exports, "__esModule", { value: true });
function Decorator(_target, _propertyKey, descriptor) {
    // console.log(target);
    // console.log(propertyKey);
    // console.log('inicio');
    // console.log(descriptor.value());
    // console.log('fim');
    const method = descriptor.value;
    descriptor.value = () => {
        console.log('inicio');
        method();
        console.log('fim');
    };
}
class Teste {
    teste() {
        console.log('testando');
    }
}
__decorate([
    Decorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Teste.prototype, "teste", null);
const teste = new Teste();
// console.log(teste.teste());
// console.log(teste.teste());
teste.teste();
teste.teste();
