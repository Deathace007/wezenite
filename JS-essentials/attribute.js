const incerementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const ulElement = document.getElementById('list-element')
let count = 0;
const counter = document.getElementById('counter');
incerementButton.addEventListener('click', ()=>{
    count++;
    counter.innerText = count;  
    

    //create an element
    const li = document.createElement('li')
    li.setAttribute('data-counter', count) //manipulating attributes, using custom attribute
    if (count%2===0){
        li.setAttribute('class','red')
    }else{
        li.setAttribute('class','yellow')
    }
    //implicit method: browser know what to do
    // li.innerHTML = '<span>Line no: </span>' + count

    //explict method: telling browser step by step
    const textNode = document.createTextNode("Line no: "+ count)
    li.appendChild(textNode)
    //append the element
    ulElement.appendChild(li)
})

decrementButton.addEventListener('click', ()=>{
    const li = ulElement.querySelector('[data-counter="'+count+'"]') //manipulating attributes
    const num = parseInt(li.getAttribute('data-counter'),10)
    if (num%2 == 0){
        li.remove()
    }
    count--;
    counter.innerText = count;  

    
})