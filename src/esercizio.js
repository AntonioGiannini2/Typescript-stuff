"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var i;
var car1 = { id: 1, marca: 'Ford', modello: 'Focus' };
var car2 = { id: 2, marca: 'Fiat', modello: 'Punto' };
var car3 = { id: 3, marca: 'Toyota', modello: 'Yaris' };
var car4 = { id: 4, marca: 'Alfa Romeo', modello: 'Giulietta' };
var car5 = { id: 5, marca: 'Opel', modello: 'Corsa' };
var cars;
cars = [car1, car2, car3, car4, car5];
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function cyclicPrinter(cars) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\nInizio popolamento Array\n\n");
        yield delay(1000);
        for (i = 0; i < cars.length; i++) {
            console.log(`Car${i + 1}`);
            console.log(` Id: ${cars[i].id} \n Marca: ${cars[i].marca} \n Modello: ${cars[i].modello}\n\n`);
            if (i != (cars.length - 1)) {
                yield delay(5000);
            }
            else {
                yield delay(1000);
            }
        }
        console.log("\nFine popolamento Array\n");
    });
}
cyclicPrinter(cars);
