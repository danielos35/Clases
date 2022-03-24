const nav =  document.querySelector('.nav'); 

// AL pasar el mouse sobre
nav.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('item')){
        const item = e.target;
        const nav  =  item.closest('.nav').querySelectorAll('.item'); 
        console.log(item,nav);


        nav.forEach(el=>{
            if(el !== item)el.style.background ='red';
        })
    }
})


// Al quitar el mouse
nav.addEventListener('mouseout', function(e){
    if(e.target.classList.contains('item')){
        const item = e.target;
        const nav  =  item.closest('.nav').querySelectorAll('.item'); 
        console.log(item,nav);


        nav.forEach(el=>{
            if(el !== item)el.style.background ='blue';
        })
    }
})



// Ver refactorización en el video