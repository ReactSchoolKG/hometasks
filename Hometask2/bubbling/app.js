const btn = document.getElementById('btn');
const p = document.getElementById('paragraph');
const div = document.getElementById('div');

// Bubbling
div.addEventListener('click', function(e){
  console.log(`div bubbling: target= ${e.target.tagName}, this= ${this.tagName}`);
  e.stopPropagation();  
});

p.addEventListener('click', function(e){
  console.log(`p bubbling: target= ${e.target.tagName}, this= ${this.tagName}`);
});

btn.addEventListener('click', function(e){
  console.log(`button bubbling: target= ${e.target.tagName}, this= ${this.tagName}`);
});

document.body.addEventListener('click', function(e) {
  alert('Event on body');
});

// Capturing
div.addEventListener('click', function(e){
  console.log(`div capturing: target= ${e.target.tagName}, this= ${this.tagName}`);
}, true);

p.addEventListener('click', function(e){
  console.log(`p capturing: target= ${e.target.tagName}, this= ${this.tagName}`);
}, true);

btn.addEventListener('click', function(e){
  console.log(`button capturing: target= ${e.target.tagName}, this= ${this.tagName}`);
}, true);

