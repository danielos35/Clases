const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Daniel",
};

// OR Assigment operator

// rest1.numGuests = rest1.numGuests || 10;
rest1.numGuests ||= 10;

// rest2.numGuests = rest2.numGuests || 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);


// rest1.owner = rest1.owner && 'Estado';
rest1.owner &&= 'estado'; 
console.log(rest1.owner);   
