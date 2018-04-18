const renderElements = (targ, elem, num) => {
    const target = document.querySelector(targ);

    for(let i = 1; i <= num; i++) {
      const newElement = document.createElement(elem);

      newElement.textContent = i;
      newElement.classList.add(`addedElement`);
      newElement.addEventListener(`click`, getValue_1);

      target.appendChild(newElement);
    }
  };

  renderElements(`#root`, `div`, 10);

  //option 1
  function getValue_1 () {
    console.log(`this.innerHTML: ${this.innerHTML}`);
  };

  //option 2
  const getValue_2 = (event) => {
    if(event.target.classList.contains(`addedElement`)) {
      console.log(`event.target.innerText: ${event.target.innerText}`);
    }
  }

  document.addEventListener(`click`, getValue_2);
