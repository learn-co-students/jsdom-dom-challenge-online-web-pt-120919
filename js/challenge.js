document.addEventListener("DOMContentLoaded", () => {
    
    let newCounter = 0
    myCounter = window.setInterval(increaseCounter, 1000)
    const counter = document.getElementById("counter")
    let plus = document.getElementById("plus")
    let minus = document.getElementById("minus")
    let heart = document.getElementById("heart")
    let likes = document.querySelector(".likes")
    let pause = document.getElementById("pause")
    let form = document.getElementById("comment-form")
    
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        let comment = document.getElementById("comment-input").value 
        let list = document.getElementById("list")
        let paragraph = document.createElement("p")
        paragraph.innerText = comment
        list.appendChild(paragraph)
        
    });
    
    function increaseCounter() {
        newCounter++
        counter.innerText = newCounter
    }

    function decreaseCounter() {
        newCounter--
        counter.innerText = newCounter
    }

    function like() {
        likes.innerHTML += `<li>Number ${newCounter} has been liked!</li>`
    }

    function toggleButton(e) {
        if (e.target.id === "pause") {
            e.target.id = "resume"
            e.target.innerText = "resume"
            clearInterval(myCounter)
            minus.disabled = true
            plus.disabled = true
        } else {
            e.target.id = "pause"
            e.target.innerText = "pause"
            myCounter = window.setInterval(increaseCounter, 1000)
            minus.disabled = false
            plus.disabled = false
        }
    }


    minus.addEventListener("click", decreaseCounter)
    plus.addEventListener("click", increaseCounter)
    heart.addEventListener("click", like)
    pause.addEventListener("click", toggleButton)
});