import stringModule from './strings';
const { getStringByLanguage } = stringModule;

const strings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  mermish: { },
}

describe('Language string', () => {
  let mockConsoleWarn = jest.fn();
  let originalWarn = console.warn;
  beforeEach(() => {
    console.warn = mockConsoleWarn;
  })

  afterEach(() => {
    mockConsoleWarn.mockClear();
    console.warn = originalWarn;
  })

  test('returns correct submit string for english', () => {
    const result = getStringByLanguage('en', 'submit', strings);
    expect(result).toBe('submit');
    expect(mockConsoleWarn).not.toHaveBeenCalled();
  })

  test('returns the correct submit string for emoji', () => {
    const result = getStringByLanguage('emoji', 'submit', strings);
    expect(result).toBe('🚀');
    expect(mockConsoleWarn).not.toHaveBeenCalled();
  })

  test('returns english submit string when language does not exist', () => {
    const result = getStringByLanguage('noLanguage', 'submit', strings);
    expect(result).toBe('submit');
    expect(mockConsoleWarn).toHaveBeenCalled();
  })

  test('returns english submit string when submit key does not exist for language', () => {
    const result = getStringByLanguage('mermish', 'submit', strings);
    expect(result).toBe('submit');
    expect(mockConsoleWarn).toHaveBeenCalled();
  })
});
