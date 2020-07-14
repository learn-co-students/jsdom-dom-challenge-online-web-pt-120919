
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
let pause = document.getElementById("pause");
let submit = document.getElementById("submit");
let counter = document.querySelector("#counter");
let ul = document.querySelector('ul.likes');

let numIncr;
const alreadyLiked = {};

let btn = document.getElementById("submit");
btn.addEventListener("submit", addComment);

pause.addEventListener("click", function() {
    if (pause.innerText == 'Pause') {
      stopIncrement();
    } else {
      setIncrement();
    }
  });

function setIncrement() {
  numIncr = setInterval( numberIncrement, 1000);
  pause.innerText = 'Pause';
  minus.disabled = false;
  plus.disabled = false;
  heart.disabled = false;
  submit.disabled = false;
  //pause.addEventListener("click", stopIncrement);
}

//function that finds element to be incremented and increment it
function numberIncrement() {
  //let counter = document.getElementById("counter");
  counter.innerText++;
}

//stop increment when button is pressed
function stopIncrement() {
  clearInterval(numIncr);
  pause.innerText = 'Resume';
  minus.disabled = true;
  plus.disabled = true;
  heart.disabled = true;
  submit.disabled = true;
  //pause.addEventListener("click", setIncrement);
}

function numberDecrement() {
  let counter = document.getElementById("counter");
  counter.innerText--;
}

//likes functionality


function likesIncrement() {
  let counterValue = counter.innerText;
  if (alreadyLiked[counterValue]) {
    alreadyLiked[counterValue]++;
    const spans = document.querySelectorAll("span")
    let targetSpan;
    spans.forEach(function(span) {
      if (span.dataset.num === counterValue) {
        targetSpan = span;
      }
    })

    targetSpan.innerText = (parseInt(targetSpan.innerText) + 1) + " times";
  }else {
    alreadyLiked[counterValue] = 1;
    ul.insertAdjacentHTML("beforeend", `<li>${counterValue} has <span data-num=${counterValue}>1</span> likes!</li>`);
  }

}

//form comment functionality

function addComment(event) {
  event.preventDefault();
  let input = document.getElementById("comment-input");
  let inputValue = input.value;
  let comments = document.querySelector("div.comments");
  let p = document.createElement('p');
  p.innerText = inputValue;
  comments.appendChild(p);
  inputValue = " ";
  debugger
}
