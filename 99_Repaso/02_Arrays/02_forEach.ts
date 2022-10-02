let arrayNumber: Array<number> = [1, 2, 3, 4, 5, 6];
arrayNumber.forEach((res, index, array) => console.log(res, index, array));

// Iterar Maps
let mapa: any = new Map<boolean, string>();
mapa.set(true, "Hola Mundo");
mapa.set(false, "Hola Mundo");

let isReal = true;
console.log(mapa.get(isReal));
