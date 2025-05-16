//QuerySelector
const heading = document.querySelector('h1');
heading.innerText = "Hello Mohan"

console.log(heading);

//QuerySelectorAll

const allSelected = document.querySelectorAll('ul li');
for (let i = 0; i < allSelected.length; i++) {
    allSelected[i].innerText = "Hello Mohan " + (i + 1);
}
console.log(allSelected);


//getElementById
const paragraph = document.getElementById('para');
paragraph.innerText = "This is the edited text";


const items = document.getElementById('list').querySelectorAll('li');
items.forEach((item, index) => {
  item.textContent = `Updated item ${index + 1}`;
});

//eventListener And createElement
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
    
    //implicit method: browser know what to do
    // li.innerHTML = '<span>Line no: </span>' + count

    //explict method: telling browser step by step
    const textNode = document.createTextNode("Line no: "+ count)
    li.appendChild(textNode)
    //append the element
    ulElement.appendChild(li)
})

decrementButton.addEventListener('click', ()=>{
    count--;
    counter.innerText = count;  
})


