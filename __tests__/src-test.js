import { createElement, createTextElement } from '../src';

test('createElement', () => {
  let element = createElement('div', {});
  expect(element).toEqual({
    type: 'div',
    props: {
      children: [],
    },
  });
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
