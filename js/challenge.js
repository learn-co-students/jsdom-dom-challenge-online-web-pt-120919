document.addEventListener("DOMContentLoaded", () => {
    let likes = 0;
    
    let paused = false;
    let x = setInterval(incrCounter, 1000);

    function incrCounter(){
        if (likes > 0)
        {
            let outer = document.querySelector("div");
            let inner = document.createElement("h4");
            inner.innerHTML = document.getElementById("counter").innerHTML + '-' + likes;
            outer.appendChild(inner);
            likes = 0;
        }        
        document.getElementById("counter").innerHTML++;
    }

    document.getElementById("plus").addEventListener("click", incCounter);
    function incCounter(){
        document.getElementById("counter").innerHTML++;
    }

    document.getElementById("minus").addEventListener("click", decCounter);
    function decCounter(){
        document.getElementById("counter").innerHTML--;
    }

    document.getElementById("heart").addEventListener("click", likeNum);
    
    
    function likeNum(){
        likes ++;
        console.log(likes);        
    }

    document.getElementById("pause").addEventListener("click", pauseCounter);

    function pauseCounter(){
        if (paused){
            x = setInterval(incrCounter, 1000);
            document.getElementById("minus").disabled = false; 
            document.getElementById("plus").disabled = false;
            document.getElementById("heart").disabled = false; 
            document.getElementById("submit").disabled = false;
            document.querySelector("button#pause").innerHTML = "Pause";
            paused = false;
        }
        else {
            clearInterval(x);
            document.getElementById("minus").disabled = true; 
            document.getElementById("plus").disabled = true;
            document.getElementById("heart").disabled = true; 
            document.getElementById("submit").disabled = true;
            document.querySelector("button#pause").innerHTML = "Resume";
            paused = true;
        }
    }


    document.getElementById("submit").addEventListener("click", addComment);

    function addComment(){
        event.preventDefault();

        document.getElementById("comment-input").value
        let commentSection= document.getElementById("list")
        let comment = document.createElement("li");
        comment.innerHTML = document.getElementById("comment-input").value;
        commentSection.appendChild(comment)
        document.getElementById("comment-input").value ='';
    }

}); 
        
 





