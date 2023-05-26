import { createElement, createTextElement } from '../src';

test('createElement', () => {
  let testCases = [
    {
      children: null,
      expected: {
        type: 'div',
        props: { children: [null] },
      },
    },
    {
      children: 'test text child',
      expected: {
        type: 'div',
        props: { children: [createTextElement('test text child')] },
      },
    },
  ];

  for (const idx in testCases) {
    let testCase = testCases[idx];
    let elem = createElement('div', null, testCase.children);
    expect(elem).toEqual(testCase.expected);
  }
});

test('createTextElement', () => {
  let text = 'Hello, world!';
  let expected = {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };

  let result = createTextElement(text);

  expect(result).toEqual(expected);
});
