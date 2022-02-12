

const aganin = function(){
  document.querySelector('body').style.background = 'white';
  cont  = 20; 
  document.querySelector('.count').textContent = cont;
}
// Functions.........
let cont = 20;

const max = function () {
  document.querySelector(".clue").textContent = "max";
};

const min = function () {
  document.querySelector(".clue").textContent = "min";
};

const win = function () {
  document.querySelector(".clue").textContent = "Your win";
  document.querySelector('body').style.background = 'green';
  document.querySelector(".highScore").textContent = cont ;
};
 
const condicions = function () {
    if(cont == 0){
        document.querySelector('.lose').textContent = `Your Lose`; 
    }else{
        cont--;
        document.querySelector('.count').textContent = cont; 
      if (Number(document.querySelector(".userNumber").value) < numberNoDecimal) {
        max();
        
      } else if (
        Number(document.querySelector(".userNumber").value) > numberNoDecimal
      ) {
        min();
      } else win();
    }
 
};

 
document.querySelector('.checkButton').addEventListener('click',condicions)
document.querySelector('.again').addEventListener('click',aganin)

// Counter



// document.querySelector('.game').textContent = `Game`;

// Number betwen 0 - 20
const number = Math.random() * 20 + 1;
console.log(number);

// Remove decimals
const numberNoDecimal = Math.trunc(number);
console.log(numberNoDecimal);
