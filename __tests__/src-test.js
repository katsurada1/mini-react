import { createElement } from '../src';

test('createElement', () => {
  const element = createElement('div', {});
  expect(element).toEqual({
    type: 'div',
    props: {
      children: [],
    },
  });
});
