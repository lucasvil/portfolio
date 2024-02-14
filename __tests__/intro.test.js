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
        let t1 = "Hi, "
        let t2 = "I'm Lucas Villarroel"

        introTextNode.innerText = ''

        await displayIntroMessage(introTextNode,  t1, t2);

        expect(introTextNode.innerText).toBe(t1 + t2);
    });
});