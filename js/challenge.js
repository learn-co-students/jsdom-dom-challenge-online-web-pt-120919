const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
let count = 0;
let pause = document.getElementById("pause");
let submit = document.getElementById("submit");



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


pause.addEventListener("click", function(){
    if(pause.innerText == 'pause') {
      clearInterval(timer)
      pause.innerText = 'resume';
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
    } else {
        timer = setInterval(incrementSeconds, 1000);
      pause.innerText = 'pause';
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
    }
  });

  submit.addEventListener("click", function(e){
    e.preventDefault();
    let comment = document.getElementById('comment-input').value
    let commentsList = document.querySelector('.comments')
    var p = document.createElement("p");
    var node = document.createTextNode(comment)
    p.appendChild(node);
    commentsList.appendChild(p);
    document.getElementById('comment-input').value = ''
  });

heart.addEventListener("click", function(){
    let heartLi = document.createElement("li");
    heartLi.innerText = `${counter.innerHTML} has been liked ${count++}`;
    document.querySelector("ul.likes").appendChild(heartLi);
  });


