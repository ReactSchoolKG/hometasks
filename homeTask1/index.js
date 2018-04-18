document.querySelector(".parent").addEventListener("click", function(e){
   if(e.target.className === "blockElement") {
       console.log(e.target.innerHTML);
   }
});

function eventListenerList(list, event, func){

    for(let i = 0; i < list.length; i++ ){
        list[i].addEventListener(event, func);
    }
}
let blockElement = document.querySelectorAll(".parent .blockElement");

function handleMouseMove() {
   let bgColor =  this.style.backgroundColor;
   this.style.backgroundColor = (bgColor === 'blue')? 'navy' : 'blue';
}

eventListenerList(blockElement, "mouseover", handleMouseMove);
eventListenerList(blockElement, "mouseout", handleMouseMove);