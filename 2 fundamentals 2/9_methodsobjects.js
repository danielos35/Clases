const daniel = {

    firstName :'Jonas', 
    lastName : 'Shmedtmann', 
    birthYeah: 1991, 
    job: 'Teacher', 
    friends: ['Michael', 'Jose', 'Jesus'], 
    hasDrive: false, 

    // Save my data in a new variable
    calcAge: function(birthYear){
        this.age =  2021 - birthYear; 
        return this.age; 

    }, 

    getData: function(){

        return `${this.firstName}, is ${this.firstName} and his last name is ${this.lastName} and the driver state is ${this.hasDrive} and born in ${this.age}`

    }, 

    getLicense: function(){

        return `${this.hasDrive?'Yes':'Nop'}`

    }
}

// Check function 
console.log(daniel.getData());
console.log(daniel.getLicense());

console.log(daniel.calcAge(23));
console.log(daniel['calcAge'](23))
console.log(daniel.age);

// Cualquien funci'on que se adjunta a un objeto es un metodo

const pedro = {

    firstName :'Jonas', 
    lastName : 'Shmedtmann', 
    birthYeah: 1998, 
    job: 'Teacher', 
    friends: ['Michael', 'Jose', 'Jesus'], 
    hasDrive: true, 
    calcAge: function(){

        // this is equal to the object
        console.log(this);
        return 2021 - this.birthYeah
        // Siempre es una buena idea hacer referencia al objeto y no una variable repetida
    }
}

console.log(pedro.calcAge());
console.log(pedro['calcAge']());
// Cualquie


// Home work