// ........NUMBERS CONVERSION..................


const year = '1998'; 
console.log(year + 18);

// JavaScript concact one string to one number (is diferent to python) 


// Convert with a function
console.log(Number(year)+18);



// .........STRINGS CONVERSION.................

const age = 23
console.log(typeof(String(age)));



// ..........COERCION.........................
console.log('I am '+23+' years old');
// Coercion
console.log('23'*'2');
console.log('23'/ 2);
console.log('23' - '10' - 3);
// Concat 
console.log('23'+'10'+3);


let n = 1 + '1' //concat 11
console.log(typeof(n));
n = n - 1; //Resta 1
console.log(n);