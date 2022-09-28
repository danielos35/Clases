// Interfaces review

interface f1Car {
  engine: string;
  capacity?: number;
}

let ferrari: f1Car = {
  engine: "Ferrari",
};

let redbull: f1Car = {
  engine: "Honda",
  capacity: 1000,
};

console.log(redbull?.capacity);
console.log(ferrari?.capacity);


// Uso para metodos 
