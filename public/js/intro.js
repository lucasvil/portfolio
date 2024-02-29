const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const displayIntroMessage = async (introTextNode, t1, t2) => {
    if (!introTextNode) return

    let cText = ""

    for (const c of t1) {
        await sleep(100)
        cText = cText + c;
        introTextNode.innerText = cText
    }
    await sleep(500)
    for (const c of t2) {
        await sleep(100)
        cText = cText + c;
        introTextNode.innerText = cText
    }
}

try {
    module.exports = {
        displayIntroMessage, sleep
    }
} catch (error) { }