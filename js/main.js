const buttonTheme = document.querySelector("#buttonTheme");
const header = document.querySelector("#header");
const headerMainWrapper = document.querySelector(".header-main__wrapper");
const html = document.querySelector("#html");
const section1 = document.getElementsByTagName("section")[0];
const section2 = document.getElementsByTagName("section")[1];

let browserWidth = window.innerWidth;

if (browserWidth > 970){
    html.classList.add("html-scroll-type");
    headerMainWrapper.classList.add("scroll-align");
    section1.classList.add("scroll-align");
    section2.classList.add("scroll-align");
} else {
    console.log("Your screen is large!!!");
}