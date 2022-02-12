

function squareDigits(num){
    let text = String(num);
    let arr = []

    for(i in text){
      arr.push((Number(text[i]**=2)));
    }
   
    let out = '';
    for(i in arr){
      out = out + arr[i]
    }
      
    return Number(out)
     
  }

console.log(squareDigits(8139));