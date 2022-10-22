import mealsCounter from '../mealsCounter';

describe('Test Counting', () => {
  test('0 DOM elements for meals should equal to 0', () => {
    // Arrange
    document.body.innerHTML = `
      <ul class="f-list | row list-unstyled mt-5 p-5 mx-auto"></ul>
    `;
    const meals = document.getElementsByClassName('meal-card');

    // Act
    const mealsCount = mealsCounter([...meals]);

    // Assert
    expect([...meals][0]).toBeFalsy();
    expect(mealsCount).toBe(0);
  });

  test('9 DOM elements for meals should equal to 9', () => {
    // Arrange
    document.body.innerHTML = `
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
        <div class="meal-card"></div>
    `;
    const meals = document.getElementsByClassName('meal-card');

    // Act
    const mealsCount = mealsCounter([...meals]);

    // Assert
    expect([...meals][0]).toBeTruthy();
    expect(mealsCount).toBe(9);
  });
});
