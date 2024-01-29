let introTextMessage1 = "Hi,\n"
let introTextMessage2 = "I'm Lucas Villarroel"

let introTextNode = document.getElementById("intro-text")

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const displayIntroMessage = async () => {
    for(const c of introTextMessage1){
        await sleep(100)
        let cText = introTextNode.textContent
        introTextNode.textContent = cText.substring(0, cText.length-1) + c + cText.substring(cText.length-1);
    }
    await sleep(500)
    for(const c of introTextMessage2){
        await sleep(100)
        let cText = introTextNode.textContent
        introTextNode.textContent = cText.substring(0, cText.length-1) + c + cText.substring(cText.length-1);
    }
}

const textMarker = async () => {
    while(true){
        let cText = introTextNode.textContent
        let lastChar = cText.charAt(cText.length-1)
        if(lastChar == '_'){
            introTextNode.textContent = cText.substring(0, cText.length-1) + '\xa0\xa0';
        }else{
            introTextNode.textContent = cText.substring(0, cText.length-2) + '_';
        }
        await sleep(500)
    }
}


displayIntroMessage().then(() => {
    textMarker()
})