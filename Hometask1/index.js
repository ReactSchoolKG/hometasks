function alertNumbs(e) {
    let target = e.target;
    if (target.classList.contains('btn')){
        console.log(target.textContent);
    }
}
function randomizer(){

}

let box = document.querySelector('div.box');
box.addEventListener('click', alertNumbs, false);