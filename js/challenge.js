document.addEventListener("DOMContentLoaded", () => {

    let counter = document.getElementById("counter")
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    let heart = document.getElementById("heart")
    let pause = document.getElementById("pause")
    let likeNumber = 0
    let likes = document.querySelector(".likes")
    let submitBtn = document.querySelector("#submit")
    let commentList = document.querySelector("#list")


    let count = setInterval(handlePlusClick, 1000);

    function handlePlusClick () {
        increaseCount = parseInt(counter.innerText);
        increaseCount += 1;
        counter.innerText = increaseCount;
        console.log(counter)
    }

    plus.addEventListener("click", handlePlusClick )

    function handleMinusClick () {
        decreaseCount = parseInt(counter.innerText)
        decreaseCount -= 1;
        counter.innerText = decreaseCount
    }

    minus.addEventListener("click", handleMinusClick )

    function handleLikeClick () {
        likes.innerHTML = `<li>${likeNumber++}</li>`
    }

    heart.addEventListener("click", handleLikeClick )

    pause.addEventListener("click", function(e){
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(count)

            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submitBtn.disabled = true;
        }

        else {
            count = setInterval(function () {
                counter.innerText++;
            }, 1000);
            pause.innerText = "pause"

            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submitBtn.disabled = false;
        }
    });

    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });

});
