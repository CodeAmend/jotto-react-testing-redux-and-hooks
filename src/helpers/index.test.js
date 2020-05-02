import {getLetterMatchCount} from ".";


describe('getLetterMatchCount', () => {
  const secretWord = 'party';

  test('returns correct count when there are no maching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0)
  })

  test('', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3)
  })

  test('', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    // 'a' is here twice
    expect(letterMatchCount).toBe(3)
  })
})
