const counter = function () {
    const btns = document.querySelectorAll('.decBth');
  
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.value');
        const currentValue = +inp.value;
        
        if (direction === 'incBth') {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }
  
        inp.value = newValue;
      })
    })
  
  }
  
  counter();




























// const Btns = document.querySelectorAll(".decBth");

// Btns.forEach(Bth => {
//     Bth.addEventListener('click',
//     function(){
//      const direction =  this.dataset.direction;
//      const inp = this.parentElement.querySelector("value");
//      const currentValue = +inp.value;
//      let newValue;

//      if(direction === 'incBth') {
//         newValue = currentValue + 1;
// } else {
//     newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;   
// }

//         inp.value = newValue;
//  } )
// })











    
// })
