let numero = 0;
let texto = "";
// or
const or = numero || 10;
console.log(or);

const orString = texto || "HolaMundo";
console.log(orString);
// El nullish no incluye al 0 o una cadena vacia, solamente los valores que son nulos o idefinidos

const nullish = numero ?? 10;
console.log(nullish);

const nullishString = texto ?? "Hola Nullish";
console.log(nullishString);
