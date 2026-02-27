const header = document.querySelector("#header");

header.addEventListener("animationend", (e) => {
    console.log(e);
    if (e.animationName = "top-in"){
        header.style = "width: 100%; border-radius: 0;"
    }
})