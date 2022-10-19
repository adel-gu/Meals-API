import './style.css';
import showMeals from './modules/showMeals';
import { addLike } from './modules/likes';

// Constants
const mealsListContainer = document.querySelector('.f-list');
const mealsNav = document.querySelector('.control');

// Populate the meals cards items
document.addEventListener('DOMContentLoaded', async () => {
  await showMeals(mealsListContainer, 0);
});

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

// Post Likes
window.addEventListener('click', async (e) => {
  // Select the like button
  const likeBtn = e.target;
  if (likeBtn.classList.contains('card-likes')) {
    // Get the meal ID
    const mealId = likeBtn.getAttribute('data-id');
    addLike(mealId);
  }
});
