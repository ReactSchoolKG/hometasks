const cir = document.querySelectorAll('.q');

    for (var i = 0; i < cir.length; i++) {
    	cir[i].onclick = function(el){
    		console.log(this.innerHTML)
    	    }
    }
   