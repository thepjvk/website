const header = document.querySelector("#header");
const aside = document.querySelector("#aside");
const main = document.querySelector("#main");

header.addEventListener("animationend", (e) => {
    if (e.animationName = "top-in"){
        header.classList.add("header__width");
    };
});

header.addEventListener("transitionend", (e) =>{
    if (e.transitionProperty = "width"){
        header.style = "border-bottom: 2px solid var(--main-border);";
        aside.classList.add("aside-in");
    }; 
});

if (window.innerWidth >= 1033){
    aside.addEventListener("animationend", (e) =>{
    if (e.animationName = "aside-shop-in"){
        main.classList.add("main-in");
    };
});
} else{
    header.addEventListener("transitionend", (e) =>{
        if (e.propertyName = "border-bottom-width"){
            main.classList.add("main-in")
        }
    })
}


