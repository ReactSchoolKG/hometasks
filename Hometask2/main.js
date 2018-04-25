var elements = document.querySelectorAll('div,p,button');

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", alertTag, true);
  elements[i].addEventListener("click", alertTagUp, false);
}
function alertTag(event){
  alert("target = " + event.target.tagName + ", this=" + this.tagName);
}
function alertTagUp(event){
  if (this.tagName == "DIV"){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
    event.stopPropagation();
  }
  else{
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
  }
}

document.body.onclick = function(event){
  alert("Event on body");
}