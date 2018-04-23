function showTargetAndThis(e){
	console.log('target = ' + e.target.localName + ', this = ' + this.localName);
	e.stopPropagation();
}

document.getElementById('div').addEventListener('click', showTargetAndThis);

document.body.addEventListener('click', function (e) {
	alert('Event on body!');
});