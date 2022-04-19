let contenedor = document.querySelector('.container'); 
let img = document.querySelector('img'); 
cargaIMG1 = function(){

    return new Promise(function(resolve, error){
        
            setTimeout(()=>{
             img.src = './img/img_2.jpg'
             resolve(img)
            },2000)
        
    }
    )
}
img.addEventListener('load', function(){
    cargaIMG1().then(res=>{
        setInterval(()=>{
            res.remove()
        },
        2000

        )
            
        
    })
   
})
