// Holds identifier of incrementCounter interval 
let interval;

function startCounter() {
    // Increcment counter every second
    interval = setInterval(incrementCounter, 1000);

    // Reset click counter every second 
    setInterval(function() {heartClicks = 0;}, 1000);
}

// Cancels action of incrementing counter 
function stopCounter() {
    clearInterval(interval)
}

// Increment counter on DOM by 1
function incrementCounter() {
    let counter = document.getElementById('counter').innerText;
    counter = parseInt(counter) + 1
    document.getElementById('counter').innerText = counter;
}

// Decrement counter on DOM by 1
function decrementCounter() {
    let counter = document.getElementById('counter').innerText;
    counter = parseInt(counter) - 1
    document.getElementById('counter').innerText = counter;
}

// Toggles button activity when toggle button is clicked 
function toggleCounter() {
    const toggleButton = document.getElementById('pause')
    const minusButton = document.getElementById('minus')
    const plusButton = document.getElementById('plus')
    const heartButton = document.getElementById('heart')

    // Button is set to pause (couter is incrementing)
    if (toggleButton.innerText === "pause") {
        stopCounter();

        // Change buttons inner text to resume
        toggleButton.innerText = "resume";

        // Prevent user from using buttons 
        minusButton.setAttribute("disabled", "disabled")
        plusButton.setAttribute("disabled", "disabled")
        heartButton.setAttribute("disabled", "disabled")
    }
    // Button is set to resume (couter has paused)
    else {
        startCounter();

        // Change buttons inner text to pause 
        toggleButton.innerText = "pause";
    
        // Allow use of buttons 
        minusButton.removeAttribute("disabled");
        plusButton.removeAttribute("disabled");
        heartButton.removeAttribute("disabled");
    }
}


// Define a counter to track heart clicks 
let heartClicks = 0; 

// Track the number of likes a counter recieves
document.getElementById('heart').addEventListener("click", function() {
    
    // Increment counter every heart click 
    heartClicks += 1;
    
    // Obtain current counter 
    let counter = document.getElementById('counter').innerText;
    
    // If counter has been liked, select its element 
    let element = document.querySelector(`[data-num="${counter}"]`)
    
    // Update number of times counter has been liked
    if (element) {
        element.innerText = `${counter} has been liked ${heartClicks} times`;
    }

    // Counter has not been liked yet
    else {

        // Create element to store counter like 
        const li = document.createElement('li');
        li.setAttribute("data-num", counter)
        li.innerText = `${counter} has been liked 1 time`;
        
        // Append element to likes list
        const likesList = document.querySelector('ul.likes');
        likesList.appendChild(li)
    }
});
    
// Allow user to add comments to the DOM
document.getElementById('comment-form').addEventListener("submit", function(event){
    
    // Obtain user comment 
    let comment = document.getElementById('comment-input');

    // Create paragraph element, insert user comment
    const p = document.createElement('p');
    p.innerText = comment.value; 

    // Append users comment to comment list 
    const commentList = document.getElementById('list');
    commentList.appendChild(p);

    // Reset text box value
    comment.value = "";

    // Prevent POST request and page refresh 
    event.preventDefault();
});


document.getElementById('pause').addEventListener("click", toggleCounter);
document.getElementById('minus').addEventListener("click", decrementCounter);
document.getElementById('plus').addEventListener("click", incrementCounter);
document.addEventListener("DOMContentLoaded", startCounter);