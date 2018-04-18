var buttons = document.getElementsByTagName('DIV');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        console.log(this.innerHTML);
    }
}