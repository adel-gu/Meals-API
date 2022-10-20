import './style.css';
import showMeals from './modules/showMeals';
import { addLike } from './modules/fetchLikes';
import showlike from './modules/showLike';
import mealsCounter from './modules/mealsCounter';

// Constants
const mealsListContainer = document.querySelector('.f-list');

// Populate the meals cards items
document.addEventListener('DOMContentLoaded', async () => {
  await showMeals(mealsListContainer);
  // Selecet meals items
  const meals = document.getElementsByClassName('meal-card');
  mealsCounter([...meals]);
  // Select all likes element
  const textLikes = document.getElementsByClassName('card-likes-txt');
  [...textLikes].forEach(async (textLike) => {
    await showlike(textLike);
  });
});

// Post Likes
window.addEventListener('click', async (e) => {
  // Select the like button
  const likeBtn = e.target;
  if (likeBtn.classList.contains('card-likes')) {
    // Update numbers of likes on the API
    const mealId = likeBtn.getAttribute('data-id');
    await addLike(mealId);
    // Update numbers of likes on the screen
    const txtlike = likeBtn.nextElementSibling;
    await showlike(txtlike);
  }
});
