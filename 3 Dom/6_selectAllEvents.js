document.querySelector('.titleButton').textContent = `Selecc the button`;
let butonTest = document.querySelectorAll('.buttonTitle');

// Test 


for(i in butonTest){
    
    butonTest[i].addEventListener('click', function(){
        document.querySelector('.escrito').textContent = 'HolaMundo';

        for(i in butonTest){
            butonTest[i].textContent = 'Click Aqui';
             
            // Quitar una clase (No usar el botón)

            butonTest[i].classList.remove('colorButton', 'otherClass', 'otherClass'); 


            // Agregar una clase (No usar el botón)
            butonTest[i].classList.add('colorBlue', 'otherClass', 'otherclass')
        }
        
    }); 
}

console.log(butonTest);