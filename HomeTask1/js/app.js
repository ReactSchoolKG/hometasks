const container = document.querySelector('.container');

function rnd() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  const rndColor = `rgb(${rnd()},${rnd()},${rnd()})`;
  this.style.backgroundColor = rndColor;
  this.style.color = 'white';
  console.log(this.textContent);
}

container.addEventListener('click', event => {
  const target = event.target;
  if (target.className === 'box') {
    changeColor.call(target);
  }
});
