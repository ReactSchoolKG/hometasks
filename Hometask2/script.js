const bodyElem = document.body;
const divElem = document.getElementById(`block`);
const pElem = document.getElementById(`paragraph`);
const buttonElem = document.getElementById(`button`);

const onBodyClick = () => console.log(`body`);
const onElementClick = event => console.log(`target: ${event.target.tagName}; this: ${event.currentTarget.tagName}`);
const onDivClick = event => {
  event.stopPropagation();
  onElementClick(event);
}

bodyElem.addEventListener(`click`, onBodyClick, false);

divElem.addEventListener(`click`, onElementClick, true);
divElem.addEventListener(`click`, onDivClick, false);

[pElem, buttonElem].forEach(elem => {
  elem.addEventListener(`click`, onElementClick, true);
  elem.addEventListener(`click`, onElementClick, false);
});
