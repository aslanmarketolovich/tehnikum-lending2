function openPopUp(){
    let bg = document.querySelector(".bg")
    bg.classList.remove("closed")
}

function closedPopUp(){
    let elem = event.target
    if(elem.className == "bg") {
        let bg = document.querySelector(".bg")
        bg.classList.add("closed")
    }
}