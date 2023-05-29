document.querySelector(".menu").addEventListener("click",() => {
    document.querySelectorAll(".onclick").forEach((item) => {
        item.classList.toggle("change")
    })
})


const icons = document.querySelectorAll(".section-1-icons img");
let i = 1

setInterval(() => {
    i++
    const icon = document.querySelector(".section-1-icons .display")

    icon.classList.remove("display")
    if(i > icons.length){
        icons[0].classList.add("display")
        i = 1
    }else{
        icon.nextElementSibling.classList.add("display")
    }
},4000)