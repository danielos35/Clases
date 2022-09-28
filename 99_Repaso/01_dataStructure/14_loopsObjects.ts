let Person = {
  name: "Daniel",
  lastName: "Marquez",
  age: 12,
};

for (const i of Object.keys(Person)) {
  console.log(i);
}

// Create Array with propieties
let arrayPerson = Object.keys(Person);
console.log(arrayPerson);

// Create Array with values
let arrayPersonValues = Object.values(Person);
console.log(arrayPersonValues);

// Create array with propieties and values.
let entriesObject = Object.entries(Person);
console.log(entriesObject);

// Diferences betwen of and in
for (let i of arrayPersonValues) {
  console.log(i);
}

// Diferences betwen of and in
for (let i in arrayPersonValues) {
  console.log(i);
}

// Destructure object
for (let [propieties, values] of entriesObject) {
  console.log(propieties);
  console.log(values);
}
