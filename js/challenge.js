document.addEventListener("DOMContentLoaded", () => {    
    const counter = document.getElementById("counter");
    const add = document.getElementById('plus');
    const minus = document.getElementById('minus');
    const heart = document.getElementById('heart');
    let likes = document.querySelector(".likes");
    const pause = document.getElementById('pause');
    let commentList = document.getElementById('list');
    const submit = document.getElementById('submit');

    let timer = true;

    let count = setInterval(function () {
    if (timer) {
        counter.innerText++;
    }
    }, 1000);

    add.addEventListener('click', function(e) {
        if (timer) {
        counter.innerText++;
        }
    });

    minus.addEventListener('click', function(e) {
        if (timer) {
        counter.innerText--;
        }
    });

    pause.addEventListener('click', function(e) {
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(count)

            add.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        }
        else {
            pause.innerText = "pause"
            count = setInterval(function () {
                if (timer) {
                    counter.innerText++;
                }
            }, 1000);

            add.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
        }
    });

    heart.addEventListener('click', function(e) {
        let obj = document.getElementById(`${counter.innerText}`);
        obj ? obj.children[0].innerText++ : 
        likes.innerHTML += `<li id=${counter.innerText}> ${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    });

    submit.addEventListener('click', function(e) {
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });
});
