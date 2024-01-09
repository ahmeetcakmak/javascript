let info = document.getElementById("info")
let userName = prompt("Kullanıcı adınızı giriniz")

info.innerHTML = `${userName ? userName : "kullanıcı bilgisi bulunamadı"} `