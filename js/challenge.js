document.addEventListener("DOMContentLoaded", () => { // Make sure eveything is loaded beforehand
    
    let newCounter = 0 // start counter at 0
    myCounter = window.setInterval(increaseCounter, 1000) // window.setInterval(func, delay)
    const counter = document.getElementById("counter") // grab counter from id
    let plus = document.getElementById("plus") // grab "+" from id
    let minus = document.getElementById("minus") // grab "-" from id
    let heart = document.getElementById("heart") // grab the heart from id
    let likes = document.querySelector(".likes") // grab the like from class
    let pause = document.getElementById("pause") // grab pause from id
    let form = document.getElementById("comment-form") // grab comment-form from id
    
    form.addEventListener("submit", function(event) { // addEventListener for the submit button on comments
        event.preventDefault() // preventDefault()
        let comment = document.getElementById("comment-input").value  // grab the value within comment-input id
        let list = document.getElementById("list") // grab list from id
        let paragraph = document.createElement("p") // create "p" and assign it to a variable
        paragraph.innerText = comment // push the comment within the paragraph
        list.appendChild(paragraph) // add a child node with an argument of paragraph
        
    });
    
    function increaseCounter() {
        newCounter++ // increase by 1 
        counter.innerText = newCounter // assign counter.innerText to newCounter
    }

    function decreaseCounter() {
        newCounter-- // decrease by 1
        counter.innerText = newCounter // assign counter.innerText to newCounter
    }

    function like() {
        likes.innerHTML += `<li>Number ${newCounter} has been liked!</li>` // create a statement that tells you what number you liked and don't forget to interpolate newCounter
    }

    function toggleButton(e) {
        if (e.target.id === "pause") { // if the counter is paused and the id is equivalent to "pause" then... 
            e.target.id = "resume" // change the id to "resume"
            e.target.innerText = "resume" // change the innerText of it to "resume"
            clearInterval(myCounter) // cancel the repeating action of the interval
            minus.disabled = true // disable the minus button
            plus.disabled = true // disable the plus button
        } else { // if the counter isn't paused and the id isn't equivalent to "pause" then...
            e.target.id = "pause" // change the id back to "pause"
            e.target.innerText = "pause" // change the innerText of it back to "pause"
            myCounter = window.setInterval(increaseCounter, 1000) // continue to increase the counter
            minus.disabled = false // don't disable the minus button
            plus.disabled = false // don't disable the plus button
        }
    }

// add eventListener s for minus, plus, heart, and pause 

    minus.addEventListener("click", decreaseCounter) 
    plus.addEventListener("click", increaseCounter)
    heart.addEventListener("click", like)
    pause.addEventListener("click", toggleButton)
});