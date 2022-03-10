type Car = {
    id: number | null;
    marca: string | null;
    modello: string | null;
}

var i: number;
var car1: Car = {id: 1, marca: 'Ford', modello: 'Focus'};
var car2: Car = {id: 2, marca: 'Fiat', modello: 'Punto'};
var car3: Car = {id: 3, marca: 'Toyota', modello: 'Yaris'};
var car4: Car = {id: 4, marca: 'Alfa Romeo', modello: 'Giulietta'};
var car5: Car = {id: 5, marca: 'Opel', modello: 'Corsa'};
var cars: Car[];
cars = [car1, car2, car3, car4, car5];

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
}

async function cyclicPrinter(cars: Car[]) {
        console.log("\nInizio popolamento Array\n\n");
        await delay(1000);
        for (i=0; i<cars.length; i++) {
            console.log(`Car ${i+1}`);
            console.log(` Id: ${cars[i].id} \n Marca: ${cars[i].marca} \n Modello: ${cars[i].modello}\n\n`);
            if (i != (cars.length - 1)) {
                await delay(5000);
            }
            else {
                await delay(1000);
            }
        }
        console.log("\nFine popolamento Array\n");
}

cyclicPrinter(cars);
