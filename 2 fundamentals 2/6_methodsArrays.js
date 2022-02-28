    const friends = ["Daniel", "Felipe", "Sandra", "Nestor"]

// Push add new item to the end
const newLength = friends.push('Alex'); 
console.log(friends);
console.log(newLength);
console.log(friends.length);


// unshift add mew item to the begining
const testUnshift =  friends.unshift('Mama'); 
console.log(testUnshift);
console.log(friends);


//pop Remove the last element to the arrays
const testPop = friends.pop()
console.log(testPop);
console.log(friends);
console.log(friends.length); 

// shift Remove the last element
const testShift = friends.shift(); 
console.log(testShift);
console.log(friends);
console.log(friends.length); 


// indexOf Position element
const testIndexOf = friends.indexOf('Nestor')
console.log(testIndexOf);
// No element -1
console.log(friends.indexOf('HolaMundo'));


// includes False or true if have the element, and use strict verification
console.log(friends.includes('Daniel'));
console.log(friends.includes('Danielos'));

friends.push(23)
console.log(friends.includes('23'));
console.log(friends.includes(23));

console.log(friends.indexOf('23'));
console.log(friends.indexOf(23));