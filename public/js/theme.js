const setTheme = (mode, themeLink)=>{
    switch (mode) {
        case 'dark':
            themeLink.setAttribute('href', '/css/dark.css')
            break;
        case 'purple':
            themeLink.setAttribute('href', '/css/purple.css')
            break;
        default:
            themeLink.setAttribute('href', '')
            break;
    }
    localStorage.setItem('theme', mode)
}

try{
    module.exports = {
        setTheme
    }
}catch(e) {}