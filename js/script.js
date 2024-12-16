let ojo = document.querySelector('.ojo2');
let ojo1 = document.querySelector('.ojo1');

let i=0;
let timerId = setInterval(function() {
    i++;
    if (i%47 == 0) {
      ojo.style.backgroundColor = '#2272FF'; 
      ojo1.style.backgroundColor = '#2272FF'; 
    } else {
        ojo.style.backgroundColor = 'black'; 
        ojo1.style.backgroundColor = 'black';   
    }
     
    
},100)
