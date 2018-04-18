var nodes = document.querySelectorAll('.ball');
for(var i = 0; i < nodes.length ; i++) {
	nodes[i].addEventListener("click", function(){
		console.log(this.innerText)
	});
}
