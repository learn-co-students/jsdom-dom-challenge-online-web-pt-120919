const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
let count = 0;
let likeClass = document.getElementsByClassName('likes')[0];


plus.addEventListener('click', function(){
    let counter = document.getElementById('counter');
    let counterNumber = parseInt(counter.innerHTML);
    counter.innerHTML = counterNumber + 1;
    
})

minus.addEventListener('click', function(){
    let counter = document.getElementById('counter');
    let counterNumber = parseInt(counter.innerHTML);
    counter.innerHTML = counterNumber - 1;
})

function incrementSeconds() {
    let counter = document.getElementById('counter');
    let counterNumber = parseInt(counter.innerHTML);
    counter.innerText = counterNumber += 1; 
    
}
let timer = setInterval(incrementSeconds, 1000);




heart.addEventListener('click', function(){
    
   likeClass.innerHTML = `<li>${counter.innerHTML} has been liked ${count++}</li>`
    
    
})


