const header = document.querySelector("#header");
const aside = document.querySelector("#aside");
const main = document.querySelector("#main");

if (window.innerWidth < 1200){
    document.body.style = "display: none;";
    alert("Sorry :(. This page isn't available for you.")
};

header.addEventListener("animationend", (e) => {
    if (e.animationName = "top-in"){
        header.classList.add("header__width");
    };
});

header.addEventListener("transitionend", (e) =>{
    if (e.transitionProperty = "width"){
        aside.classList.add("aside-in")
    }; 
});

aside.addEventListener("animationend", (e) =>{
    if (e.animationName = "aside-shop-in"){
        main.classList.add("main-in");
    };
});


