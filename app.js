let square = document.querySelector('.sq');

for(let i = 0; i<374; i++){
    const el = document.createElement('div');
    el.classList.add('el');
    square.appendChild(el)

}



square.addEventListener('mouseover',function(e){

    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    
   const target = e.target
   if(target.classList.contains('el')){
        target.style.backgroundColor = `rgb(${r},${g},${b})`
    setTimeout(function(){
        target.style.backgroundColor = 'yellow'
        target.style.backgroundColor = '#272727'
    },500)
   }
})