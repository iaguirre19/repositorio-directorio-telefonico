const arrows = document.querySelectorAll(".bx-chevron-right");

arrows.forEach((arrow) => {
    arrow.addEventListener("click", ()=> {
        console.log("clicked arrow")
    })
})