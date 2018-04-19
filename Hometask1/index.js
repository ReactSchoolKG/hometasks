function alertNumbs(e) {
    let target = e.target;
    while(target != this){  // this == box
        if (target.classList.contains('btn')){
            console.log(target.textContent);
            if(target.classList.contains('red')){
                target.classList.remove('red');
                randomizer(this);
            }
        }
        target = target.parentNode;
    }
}

function randomizer(list){
    let rand = Math.floor(Math.random() * 10);
    list.children[rand].classList.add('red');
}

let box = document.querySelector('div.box');
box.onclick = alertNumbs;
randomizer(box);