

document.addEventListener('keydown', function(e){

   

    // whatch all object
    console.log(e);

    // Watch the key
    console.log(e.key);

});


// You push the key escape
document.addEventListener('keydown', function(e){
    if(e.key == 'Escape'){
        document.querySelector('.keyTitle').textContent = 'Your push escape';

        
        if(document.querySelector('.keyTitle').classList.contains('colorBlue')){

        // Remove class
            document.querySelector('.keyTitle').classList.remove('colorBlue'); 
        } 
    }else{
        document.querySelector('.keyTitle').textContent = `Your push ${e.key}`; 
    }; 

    
})


// 