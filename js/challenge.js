document.addEventListener("DOMContentLoaded", () => {
    //grab the counter
let counter = document.querySelector("#counter")


 //run the counter
 let count = setInterval(function () {
     counter.innerText++;
     let oElem = document.getElementById('counter');
      oElem.style.color = oElem.style.color == 'yellow' ? 'red' : 'yellow';
 }, 1000);
  

 
 let minus = document.querySelector("#minus")
 let plus = document.getElementById("plus")
 let love = document.getElementById("heart")
 let pause = document.getElementById("pause")
 let likes = document.querySelector(".likes")
 

 let submitBtn = document.querySelector("#submit")
 let commentList = document.querySelector("#list")
 
 // minus button
 minus.addEventListener("click", subtract)
 
 function subtract(e){
    counter.innerText--
};

// plus button 
plus.addEventListener('click', add)

    function add(e){
        counter.innerText++
    };

   // pause button
   pause.addEventListener("click", function(e){
    if (pause.innerText === "pause"){
        pause.innerText = "resume"
        clearInterval(count)
        
        plus.disabled = true;
        minus.disabled = true;
        love.disabled = true; 
        submitBtn.disabled = true;
    }
    else {
        count = setInterval(function () {
            counter.innerText++; 
        }, 1000);
        pause.innerText = "pause"

        plus.disabled = false;
        minus.disabled = false;
        love.disabled = false; 
        submitBtn.disabled = false;
    }
});

// love button
love.addEventListener("click", function(e){
    let obj = document.getElementById(`${counter.innerText}`);
    obj ? obj.children[0].innerText++ : 
    likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
});

// submit comments // button
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    let comment = document.querySelector("#comment-form > input[type=text]").value
    commentList.innerHTML += `<li>${comment}</li>`
    document.querySelector("#comment-form").reset();
});


 
})