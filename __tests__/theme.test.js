const { setTheme } = require('../public/js/theme');

describe('setTheme function', () => {
  let themeLink;
  let mockSetItem

  beforeEach(() => {
    // mock themelink
    themeLink = document.createElement('link');
    document.head.appendChild(themeLink);

    // spyOn setItem
    mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
  });

  afterEach(() => {
    // Clean up the DOM after each test
    document.head.removeChild(themeLink);
    jest.clearAllMocks();
  });

  test('should set the theme to dark', () => {
    setTheme('dark', themeLink);

    expect(themeLink.getAttribute('href')).toBe('/css/dark.css');
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith('theme', 'dark');
  });

  test('should set the theme to purple', () => {
    setTheme('purple', themeLink);

    expect(themeLink.getAttribute('href')).toBe('/css/purple.css');
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith('theme', 'purple');
  });

  test('should reset the theme', () => {
    setTheme('invalid', themeLink);

    expect(themeLink.getAttribute('href')).toBe('');
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith('theme', 'invalid');
  });
});