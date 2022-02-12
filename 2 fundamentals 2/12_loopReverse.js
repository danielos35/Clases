const daniel = ["Daniel", "Felipe", 23, "Futbol", "Familia", true];

for (let i = daniel.length - 1; i > 0; i--) {
  console.log(daniel[i]);
}

for (let exercise = 1; exercise < 10; exercise++) {
  console.log(`Exercise number: ${exercise}`);
  for (let rep = 1; rep < 8; rep++) {
    console.log(`Rep #${rep}`);
  }
}
