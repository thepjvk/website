const header = document.querySelector("#header");
const aside = document.querySelector("#aside");
const main = document.querySelector("#main");
const buttonGames = document.querySelector(".button__games");
const buttonApps = document.querySelector(".button__apps");
const listGames = document.querySelector(".list__games");
const listGamesArray = listGames.children;
const listApps = document.querySelector(".list__apps");

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
};


buttonGames.addEventListener("click", () =>{
    buttonApps.classList.remove("aside__button__select");
    buttonGames.classList.toggle("aside__button__select");
    listApps.style = "display: none;";
    listGames.style = "display: flex;";
});

buttonApps.addEventListener("click", () =>{
    buttonGames.classList.remove("aside__button__select");
    buttonApps.classList.toggle("aside__button__select");
    listGames.style = "display: none;";
    listApps.style = "display: flex;";
});




