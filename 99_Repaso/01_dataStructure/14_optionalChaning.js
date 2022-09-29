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
console.log(
  restaurantChaining.americanMenu.china?.menuOne || "this valor no exitst"
);

// Metodos

let methods = {
  sum(valOne, valTwo) {
    return valOne + valTwo;
  },
};

console.log(methods.sum?.(1, 2));
console.log(methods.res?.(1, 2) ?? "this function no exist my friend");
