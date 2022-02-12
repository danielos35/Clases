// Crear eventos desde el Dom
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

let palabras = "";
let count = 1;

// llamar un evento desde el DOM
document.querySelector("button").addEventListener("click", function () {
  palabras = document.querySelector("textarea").value;
  arrayWords = palabras.split("\n");
  for (frase of arrayWords) {
    frase = frase.trim();
    frase = frase.toLowerCase();
    word = frase.split("_");
    for (wordDos in word) {
      if (wordDos > 0) {
        word[wordDos] = word[wordDos].replace(
          word[wordDos][0],
          word[wordDos][0].toUpperCase()
        );
      }
    }

    word = word.join("");
    agregar = count + word.length; 
    word = word.padEnd(agregar, "✔");
    console.log(word);
    count++
  }
});




// Solucion profesor
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
