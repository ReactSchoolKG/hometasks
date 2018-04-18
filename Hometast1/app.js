
const Button = function(id) {
  this.id = id;
  this.add = function() {
    let el = document.getElementById(this.id);
    el.addEventListener('click', () => console.log(el.firstChild.innerHTML))
  };
};

const box1 = new Button('box1');
const box2 = new Button('box2');
const box3 = new Button('box3');
const box4 = new Button('box4');
const box5 = new Button('box5');
const box6 = new Button('box6');
const box7 = new Button('box7');
const box8 = new Button('box8');
const box9 = new Button('box9');
const box10 = new Button('box10');
box1.add();
box2.add();
box3.add();
box4.add();
box5.add();
box6.add();
box7.add();
box8.add();
box9.add();
box10.add();