let greeting = document.getElementById("info")

greeting.addEventListener("click",changeInfo)
let num = 0
function changeInfo(){
    console.log("tıklandı");
    num += 1
    greeting.innerHTML = `bilgi ${num} kere değişti`
    greeting.style.color == "red" ? greeting.style.color = "black" : greeting.style.color = "red"
    
}