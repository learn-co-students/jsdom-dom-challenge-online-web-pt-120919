document.addEventListener("DOMContentLoaded", () => {

    let counter = document.querySelector("#counter")

    let count = setInterval(function () {
        counter.innerText++; 
    }, 1000); 

    let minus = document.getElementById("-")
    let plus = document.getElementById("+")
    let love = document.getElementById("<3")
    let pause = document.getElementById("pause")
    let likes = document.querySelector(".likes")

    let submitComment = document.querySelector("#submit")
    let comments = document.querySelector("#list")
    
    minus.addEventListener("click", function(e){
        counter.innerText--;
    });
    
    plus.addEventListener("click", function(e){
        counter.innerText++;
    });
    
    pause.addEventListener("click", function(e){
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(count)
            
            plus.disabled = true;
            minus.disabled = true;
            love.disabled = true; 
            submitComment.disabled = true;
        }
        else {
            count = setInterval(function () {
                counter.innerText++; 
            }, 1000);
            pause.innerText = "pause"

            plus.disabled = false;
            minus.disabled = false;
            love.disabled = false; 
            submitComment.disabled = false;
        }
    });
    
    love.addEventListener("click", function(e){
        let obj = document.getElementById(`${counter.innerText}`);
        obj ? obj.children[0].innerText++ : 
        likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    });
    
    submitComment.addEventListener("click", function(e){
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        comments.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });

});