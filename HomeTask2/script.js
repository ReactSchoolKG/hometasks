var elem = document.querySelectorAll("div,p,button");

for(let i = 0; i < elem.length; i++){
    elem[i].addEventListener("click",function(){func(event, this)}, true );
    elem[i].addEventListener("click",function(){func(event, this)}, false );

}
function func(e, self){
    console.log("target = " + e.target.tagName + "  this = " + self.tagName);

}
