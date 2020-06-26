// [x] As a user, I should see the timer increment every second once the page has loaded.
// [x] As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// [x] As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// [x] As a user, I can pause the counter, which should
//   [x] pause the counter
//   [x] disable all buttons except the pause button
//   [x] the pause button should then show the text "resume."
//   [x] When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// [x] As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
let incButton = document.getElementById('plus');
let decButton = document.getElementById('minus');
let heartButton = document.getElementById('heart');
let pauseButton = document.getElementById('pause');
let likesEle = document.getElementsByClassName('likes')[0];
let counter = document.getElementById('counter');
let comments = document.getElementById('list');
comments.innerHTML = '<ul id="list-of-comments"></ul>';
let listOfComments = document.getElementById('list-of-comments');
let commentForm = document.getElementById('comment-form');
let num = 0; // current num on the counter
let i = 0; // current num of comment to be added
let likes = [];


document.addEventListener("DOMContentLoaded", () => {
  let intervalID;

  function startCounter() {
    intervalID = window.setInterval(incrementCounter, 1000);
  }

  function incrementCounter() {
    num += 1;
    counter.innerHTML = num;
  }

  function decrementCounter() {
    num -= 1;
    counter.innerHTML = num;
  }

  function like() {
    let tmp = counter.innerHTML;
    if (typeof likes[tmp] === 'undefined') {
      likes[tmp] = 1;
    } else {
      likes[tmp] += 1;
    }
    likesEle.innerHTML += `<li id="likes[${tmp}]">number: ${tmp} has ${likes[tmp]} likes</li>`;
    console.log(counter.innerHTML);
  }

  function togglePause() {
    if (pauseButton.innerText == 'pause') {
      clearInterval(intervalID);
      incButton.disabled = true;
      decButton.disabled = true;
      heartButton.disabled = true;
      pauseButton.innerText = 'resume';
    } else {
      startCounter();
      incButton.disabled = false;
      decButton.disabled = false;
      heartButton.disabled = false;
      pauseButton.innerText = 'pause';
    }
  }

  function addComment(event) {
    const text = document.getElementById("comment-input").value;
    listOfComments.innerHTML += `<li id=${i}>${text}</li>`;
    i += 1; // increment number of next comment to be added
    console.log('here');
    event.preventDefault();
  }

  incButton.addEventListener('click', incrementCounter);
  decButton.addEventListener('click', decrementCounter);
  heartButton.addEventListener('click', like);
  pauseButton.addEventListener('click', togglePause);
  commentForm.addEventListener('submit', addComment);

  startCounter();

});