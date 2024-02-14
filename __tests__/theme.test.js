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

  test('should set the theme to light', () => {
    setTheme('light', themeLink);

    expect(themeLink.getAttribute('href')).toBe('/css/light.css');
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith('theme', 'light');
  });

  test('should be dark by default', () => {
    setTheme('invalid', themeLink);

    expect(themeLink.getAttribute('href')).toBe('/css/dark.css');
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith('theme', 'invalid');
  });
});