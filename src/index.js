import './style.css';
import showMeals from './modules/showMeals';
import { addLike } from './modules/fetchLikes';
import showlike from './modules/showLike';
import mealsCounter from './modules/mealsCounter';
import populateComment from './modules/populateComment.js';

// Constants
const urls =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments';
const mealsListContainer = document.querySelector('.f-list');

// Populate the meals cards items
document.addEventListener('DOMContentLoaded', async () => {
  await showMeals(mealsListContainer);
  // Selecet meals items
  const meals = document.getElementsByClassName('meal-card');
  const counterContentText = document.querySelector('.meals-counts');
  counterContentText.textContent = mealsCounter([...meals]);
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

const handleCommentClick = async (meals) => {
  const [id, name, category, image, origin] = meals;
  await populateComment(id, name, category, image, origin, urls);
  const thepopup = document.getElementById('popup');
  document.body.classList.add('body-y-scroll');
  thepopup.classList.add('popup2');
};

// event.preventDefault();
window.handleCommentClick = handleCommentClick;
