var elements = document.querySelectorAll('div,p,button');

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", alertTag, true);
  elements[i].addEventListener("click", alertTag, false);
}
function alertTag(event){
  alert("target = " + event.target.tagName + ", this=" + this.tagName);
}