
// THIS CODE IS NOT BEING USED
const buttonTheme = document.querySelector("#buttonTheme");
const body = document.querySelector("#body");
const header = document.querySelector("#header");



buttonTheme.addEventListener("click", () =>{
    body.classList.toggle("lm-background-main")
    header.classList.toggle("lm-background-secondary");
    if (buttonTheme.textContent == "clear_day") {
        buttonTheme.textContent = "mode_night";
        buttonTheme.style = "color: var(--subtitle-color);";
    } else {
        buttonTheme.textContent = "clear_day";
        buttonTheme.style = "color: var(--yellow);";
    }
})
