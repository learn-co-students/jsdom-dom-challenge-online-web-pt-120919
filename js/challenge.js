document.addEventListener('DOMContentLoaded', function(){

    const counter = document.getElementById('counter')
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const heart = document.getElementById('heart')
    const pause = document.getElementById('pause')

    let buttons = [plus, minus, heart]

    let intervalID = setInterval(function timerCounter(){
        let i = parseInt(counter.innerText)
        i ++ 
        counter.innerText = i
    }, 1000)

    plus.addEventListener('click', function(){
        let x = parseInt(counter.innerText)
        x++
        counter.innerText = x
    })

    minus.addEventListener('click', function(){
        let x = parseInt(counter.innerText)
        x--
        counter.innerText = x
    })

    heart.addEventListener("click", like)
    function like(){
        listItem = document.createElement('li')
        listItem.innerText = `You liked at ${counter.innerText}`
        const list = document.querySelector('.likes')
        list.appendChild(listItem)
    }


    pause.addEventListener("click", isRunning)

    function isRunning() {
        let x = counter.innerText
        if(pause.innerText == 'pause'){
            stop(intervalID)
        } else {
            resume(x, intervalID)
        }
    }
    function stop(intervalId){
        buttons.forEach(but => but.disabled = true)
        let x = counter.innerText
        clearInterval(intervalID)
        pause.innerText = 'resume'
    }
 
    function resume(currentTime, intervalId) {
        pause.innerText = 'pause'
        counter.innerText = currentTime
        intervalID = setInterval(function timerCounter(){
            let i = parseInt(counter.innerText)
            i ++ 
            counter.innerText = i
        }, 1000)
        buttons.forEach(but => but.disabled = false)
    }
    const submit = document.getElementById('submit')

    submit.addEventListener('click', enterComment)

    function enterComment(){
        event.preventDefault()
        let input = document.getElementById('comment-input')
        let comment = document.createElement('p')
        const list = document.getElementById('list')
        comment.innerText = input.value
        list.appendChild(comment)
        document.getElementById('comment-form').reset()
    }
})

