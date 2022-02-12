const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

/*........................... .PUNTO 1............................... */

let setEventos = new Set(gameEvents.values());
console.log(setEventos);

// Creacion array
let arrayEventos = [...setEventos]; 
console.log(arrayEventos);



/*............................PUNTO 2............................... */
// Remover elemento 
console.log(gameEvents);
gameEvents.delete(64); 

console.log(gameEvents);

/*............................PUNTO ............................... */
for(let [minute, action] of [...gameEvents]){
  if(minute<45){
    console.log(`En el minuto ${minute} del primer tiempo paso ${action}`);
  }else{
    console.log(`En el minuto ${minute} del segundo tiempo paso ${action}`);
  }
}
