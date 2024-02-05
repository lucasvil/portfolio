const {displayIntroMessage} = require('../public/js/intro');


describe('displayIntroMessage function', () => {
    let introTextNode;

    beforeEach(() => {
        // Mock the necessary elements
        introTextNode = document.createElement('h1');
        document.body.appendChild(introTextNode);
    });

    afterEach(() => {
        // Clean up the DOM after each test
        document.body.removeChild(introTextNode);
        jest.clearAllMocks();
    });

    test('should display intro message', async () => {
        let marker = '_'
        let t1 = "Hi,\n"
        let t2 = "I'm Lucas Villarroel"

        introTextNode.innerText = ''
        console.log("Before calling displayIntroMessage:", introTextNode);

        await displayIntroMessage(introTextNode, marker,  t1, t2);

        console.log("After calling displayIntroMessage:", introTextNode);


        expect(introTextNode.innerText).toBe(t1 + t2 + marker);
    });
});