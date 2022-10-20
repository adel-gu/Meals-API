import './style.css';
import showMeals from './modules/showMeals.js';
import populateComment from './modules/populateComment.js';
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

const handleCommentClick = async (meals) => {
  const [id, name, category, image, origin] = meals;
  await populateComment(id, name, category, image, origin);
  const thepopup = document.getElementById('popup');
  thepopup.classList.add('popup2');
};

const handleSubmit = () => {

};

// event.preventDefault();
window.handleCommentClick = handleCommentClick;
window.handleSubmit = handleSubmit;
