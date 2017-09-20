"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StoreItemsService = (function () {
    function StoreItemsService() {
        this.items = {
            electronics: [['camera', 90],
                ['smartphone', 200],
                ['iphone', 700],
                ['laptop', 1000],
                ['ipad', 800],
                ['kindle', 40],
                ['tablet', 300]],
            icecreames: [['vanilla', 50],
                ['chocolate', 200],
                ['butterscotch', 700],
                ['fruty', 1000],
                ['blackberry', 300]],
            clothes: [['clothes1', 50],
                ['clothes1', 50],
                ['clothes2', 60],
                ['clothes3', 70],
                ['clothes4', 80],
                ['clothes5', 90],
                ['clothes6', 100],
                ['clothes7', 110]
            ],
            books: [['book1', 50],
                ['book1', 50],
                ['book2', 60],
                ['book3', 70],
                ['book4', 80],
                ['book5', 90],
                ['book6', 100],
                ['book7', 110]
            ]
        };
    }
    StoreItemsService.prototype.getElectronics = function () {
        return this.items.electronics;
    };
    StoreItemsService.prototype.getIcecreames = function () {
        return this.items.icecreames;
    };
    StoreItemsService.prototype.getClothes = function () {
        return this.items.clothes;
    };
    StoreItemsService.prototype.getbooks = function () {
        return this.items.books;
    };
    return StoreItemsService;
}());
StoreItemsService = __decorate([
    core_1.Injectable()
], StoreItemsService);
exports.StoreItemsService = StoreItemsService;
