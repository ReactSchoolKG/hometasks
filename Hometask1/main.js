var buttons = document.getElementsByTagName("div");

for (var i = 0; i<buttons.length; i++){
  buttons[i].addEventListener("click", display);
};

function display(){
  console.log(this.innerHTML);
}