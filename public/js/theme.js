const setTheme = (mode, themeLink)=>{
    switch (mode) {
        case 'dark':
            themeLink.setAttribute('href', '/css/dark.css')
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

try{
    module.exports = {
        setTheme
    }
}catch(e) {}