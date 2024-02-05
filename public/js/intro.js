const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const displayIntroMessage = async (introTextNode, marker, t1, t2) => {
    if(!introTextNode) return

    let cText = marker

    console.log("Inside displayIntroMessage:", introTextNode);

    
    for(const c of t1){
        await sleep(100)
        cText = cText.substring(0, cText.length-1) + c + cText.substring(cText.length-1);
        introTextNode.innerText = cText
    }
    await sleep(500)
    for(const c of t2){
        await sleep(100)
        cText = cText.substring(0, cText.length-1) + c + cText.substring(cText.length-1);
        introTextNode.innerText = cText
    }
}

const textMarker = async (introTextNode) => {
    while(true){
        let cText = introTextNode.innerText
        let lastChar = cText.charAt(cText.length-1)
        if(lastChar == '_'){
            introTextNode.innerText = cText.substring(0, cText.length-1) + '\xa0\xa0';
        }else{
            introTextNode.innerText = cText.substring(0, cText.length-2) + '_';
        }
        await sleep(500)
    }
}

try{
    module.exports = {
        displayIntroMessage, textMarker, sleep
    }
}catch(error) {}