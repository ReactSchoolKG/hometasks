    const divEl = document.getElementsByClassName('div')[0],
            pEl = document.getElementsByClassName('p')[0],
            btn = document.getElementsByClassName('btn')[0],
            body = document.getElementById('body');

//Фаза спливання
    divEl.addEventListener('click',function(event){
        console.log("(Фаза спливання) Тригер відбувся на: " + event.target.tagName + ", Поточний елемент:" + this.tagName);
        event.stopPropagation();
    })
    
//Фаза захоплення

    divEl.addEventListener('click',function(event){
        console.log("(Фаза захоплення) Тригер відбувся на: " + event.target.tagName + ", Поточний елемент:" + this.tagName);
    },true)

//Фаза спливання

    pEl.addEventListener('click',function(event){
        console.log("(Фаза спливання) Тригер відбувся на: " + event.target.tagName + ", Поточний елемент:" + this.tagName);
    })
    
//Фаза захоплення

    pEl.addEventListener('click',function(event){
        console.log("(Фаза захоплення) Тригер відбувся на: " + event.target.tagName + ", Поточний елемент:" + this.tagName);
    },true)

//Фаза спливання

    btn.addEventListener('click',function(event){
        console.log("(Фаза спливання) Тригер відбувся на: " + event.target.tagName + ", Поточний елемент:" + this.tagName);
    })
    
//Фаза захоплення

    btn.addEventListener('click',function(event){
        console.log("(Фаза захоплення) Тригер відбувся на: " + event.target.tagName + ", Поточний елемент:" + this.tagName);
    },true)

//body

    body.addEventListener('click',()=>alert('Event on body'));