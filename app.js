const bell = document.querySelector(".bell")
const notification = document.querySelector(".notification")
const chatting = document.querySelector(".chatting")
;

const container = document.querySelector(".container")

bell.addEventListener("click", ()=>{
    notification.classList.toggle("active")
})

chatting.addEventListener("click", ()=>{
    container.classList.toggle("hide-right-side");
})
