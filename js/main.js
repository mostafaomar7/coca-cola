//toogle class on icon

let x= document.querySelector(".toogle i");
x.onclick = function() {
    this.classList.toggle("fa-spin")
    document.querySelector(".setting-box").classList.toggle("open")
}




let landingpage = document.querySelector(".landing-page")
let imgArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]


setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgArray.length)
    landingpage.style.backgroundImage='url("img/'+imgArray[randomNumber] +'")'
},5000)
