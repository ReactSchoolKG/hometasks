const mainDiv = document.getElementById('main');
const paragraph = document.getElementById('paragraph');
const btn = document.getElementById('btn');

//for output target element
btn.addEventListener('click', function(e) {
  console.log(`Target Event ${e.target.tagName}`);
});
//for output trigger
btn.addEventListener('click', function(e) {
  console.log(`Triggered ${this.tagName}`);
});

//for output target element
paragraph.addEventListener('click', function(e) {
  console.log(`Target Event ${e.target.tagName}`);
  e.stopPropagation();
});
//for output trigger
paragraph.addEventListener('click', function(e) {
  console.log(`Triggered ${this.tagName}`);
});

//for output target element
mainDiv.addEventListener('click', function(e) {
  console.log(`Target Event ${e.target.tagName}`);
});
//for output trigger
mainDiv.addEventListener('click', function(e) {
  console.log(`Triggered ${this.tagName}`);
});

document.body.addEventListener('click', function(e) {
  alert('Event on body');
});
