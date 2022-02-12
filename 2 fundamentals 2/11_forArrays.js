const daniel = ["Daniel", "Felipe", 23, "Futbol", "Familia", true];

const types = [];
// Opcion 1
for (let i = 0; i < daniel.length; i++) {
  types[i] = typeof daniel[i];
  console.log(daniel[i]);
}

console.log(types);

// Years
const year = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < year.length; i++) {
  ages.push(2021 - year[i]);
}
console.log(ages);

// Continue permite realiza solo las iteraciones indicadas

for (let i = 0; i < daniel.length; i++) {
  if (typeof daniel[i] !== "string") continue;
  if (typeof daniel[i] == "number") break;
  console.log(daniel[i]);
}
