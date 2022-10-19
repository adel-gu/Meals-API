import './style.css';
import getdata from './modules/addData.js';
import showMeals from './modules/showMeals';

// Constants
const mealsListContainer = document.querySelector('.f-list');
const mealsNav = document.querySelector('.control');

// Populate the meals cards items
document.addEventListener('DOMContentLoaded', showMeals(mealsListContainer, 0));

// Populate according to the meals-nav
mealsNav.addEventListener('click', (e) => {
  e.preventDefault();
  // Get the clicked nav link index data.
  const navIndex = e.target.getAttribute('data-index');
  // Empty the list meals container from the previous cards
  mealsListContainer.innerHTML = '';
  // Generate new 9 items
  showMeals(mealsListContainer, navIndex);
});
