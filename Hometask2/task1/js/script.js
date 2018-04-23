var div = document.querySelector("div");
var p = document.querySelector("p");
var button = document.querySelector("button");

div.addEventListener("click", function(e){
 console.log("capturing \ntarget :" + e.target.tagName +"\nthis: " + this.tagName);
}, true);

p.addEventListener("click", function(e){
 console.log("capturing \ntarget :" + e.target.tagName +"\nthis: " + this.tagName);
}, true);

button.addEventListener("click", function(e){
 console.log("capturing \ntarget :" + e.target.tagName +"\nthis: " + this.tagName);
}, true);

button.addEventListener("click", function(e){
 console.log("bubbling \ntarget :" + e.target.tagName +"\nthis: " + this.tagName);
});

p.addEventListener("click", function(e){
 console.log("bubbling \ntarget :" + e.target.tagName +"\nthis: " + this.tagName);
});

div.addEventListener("click", function(e){
 console.log("bubbling \ntarget :" + e.target.tagName +"\nthis: " + this.tagName);
 e.stopPropagation(); 
});

document.body.addEventListener("click", function(e) {
  alert("Event on body");
});

