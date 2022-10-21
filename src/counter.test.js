/** @jest-environment jsdom */
import counter from './modules/counterComment.js';

describe('counter tests', () => {
  test('test counter', () => {
    // arrange
    const data = [
      {
        comment: 'This is nice!',
        creation_date: '2021-01-10',
        username: 'John',
      },
      {
        comment: 'Great content!',
        creation_date: '2021-02-10',
        username: 'Jane',
      },
    ];
    const h35 = document.createElement('h3');
    // act
    counter(h35, data);
    // assert
    expect(h35.innerHTML).not.toBe('');
  });
});
