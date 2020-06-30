const counter = document.getElementById("counter");
const pause = document.getElementById("pause");
let timer;
let likeCounter = {};

document.addEventListener("DOMContentLoaded", () => {
    timer = window.setInterval(counts, 1000);

});

function counts(){
    const counterNum = parseInt(counter.innerText);
    counter.innerText = counterNum + 1;
};

document.addEventListener('click', function(e){

    switch(e.target.id) {
        case 'minus':
            counterNum = parseInt(counter.innerText);
            counter.innerText = counterNum - 1;
            break
        case 'plus':
            counts();
            break
        case 'pause':
            playPause();
            break
        case 'heart':
            counterNum = parseInt(counter.innerText);
            if (likeCounter[counterNum]){
                likeCounter[counterNum] += 1;
                const li = document.querySelector(`[data-number="${counterNum}"]`);
                li.innerText = `${counterNum} liked ${likeCounter[counterNum]} times`;
            } else {
                likeCounter[counterNum] = 1;
                const like = document.getElementsByClassName("likes")[0];
                const li = document.createElement("li");
                li.innerText = `${counterNum} liked 1 time`;
                li.dataset.number = counterNum;
                like.appendChild(li);
            }
            break
        case 'submit':
            e.preventDefault();
            const list = document.getElementById("list");
            const my_comment = document.createElement("p");
            my_comment.innerText = document.getElementById("comment-input").value;
            list.append(my_comment);
            break
    }
});


const playPause = event => {

    if (pause.innerText == "pause") {
        window.clearInterval(timer);
        pause.innerText = "resume";

        btns = document.getElementsByTagName('button');
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].id != "pause") {
                btns[i].disabled = true;
            }
         }

    } else if (pause.innerText == "resume") {
        timer = window.setInterval(counts, 1000);
        pause.innerText = "pause";

        btns = document.getElementsByTagName('button');
        for (var i = 0; i < btns.length; i++) {
                btns[i].disabled = false;
         }
    }
};



