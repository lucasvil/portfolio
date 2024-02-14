let themeLink = document.getElementById("theme-style");
let themeDots = document.getElementsByClassName("theme-dot")


for(let themeDot of themeDots){
    themeDot.addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

const setTheme = (mode)=>{
    switch (mode) {
        case 'dark':
            themeLink.href = '/css/dark.css'
            break;
        case 'light':
            themeLink.href = '/css/light.css'
            break;
        default:
            themeLink.href = '/css/dark.css'
            break;
    }
    localStorage.setItem('theme', mode)
}

window.addEventListener('load', (e) => {
    for(let el of document.querySelectorAll('body *')){
        el.style = "transition: 0.3s"
    }
})