let num = document.getElementById("num")
let inc = document.getElementById("inc")
let dec = document.getElementById("dec")

let number = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0

num.innerHTML = number

inc.addEventListener("click",clickEvent)
dec.addEventListener("click",clickEvent)



F
function clickEvent(){
    
    this.id == "inc" ? number +=1 : number -=1
    localStorage.setItem('counter',number)
    num.innerHTML = number

}

