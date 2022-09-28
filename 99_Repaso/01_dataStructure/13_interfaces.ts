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

// Optional chaning

let restaurantChaining = {
  americanMenu: {
    eeuu: "hamburguer",
    mexico: "tacos",
    colombia: {
      menuOne: "bandeja paiza",
      menuTwo: "sancocho",
    },
  },
};

console.log(restaurantChaining.americanMenu.colombia?.menuOne);
console.log(restaurantChaining.americanMenu.china?.menuOne);
