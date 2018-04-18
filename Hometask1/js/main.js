(function(){
    const elements = document.getElementsByClassName('numberCircle');


    for(var i=0 ; i<elements.length ; i++){
      elements[i].addEventListener('click', printNumber, false);
    }
})()
function printNumber(){
    console.log(this.innerText); 
}