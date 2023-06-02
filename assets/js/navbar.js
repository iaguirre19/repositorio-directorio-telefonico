let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let icono = document.querySelector(".bxl-c-plus-plus");
let btn1 = document.querySelector("bx-menu");
let img = document.querySelector("#img-profile")


btn.addEventListener("click", showSideBar)
searchBtn.addEventListener("click", showSideBar)

function showSideBar(){
    sidebar.classList.toggle("active");
}


// btn.onclick = function(){
//     sidebar.classList.toggle("active");
// }
// searchBtn.onclick = function(){
//     sidebar.classList.toggle("active");
// }

