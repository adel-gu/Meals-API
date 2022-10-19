import './style.css';
import showMeals from './modules/showMeals';
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

document.addEventListener('DOMContentLoaded', () => {
  populateComment();
  const thepopup = document.getElementById('popup');
  thepopup.classList.add('popup2');
});

const handleClick = () => {
  const thepopup = document.getElementById('popup');
  thepopup.classList.remove('popup2');
};

const handleSubmit = () => {
  // const form = document.getElementById('form');
  // console.log(e)
  //   const data = {
  //     "item_id": "52768",
  //     "username": form.username.value,
  //     "comment": form.insight.value
  // }
  // handlePostingComment(data, url);
};
// event.preventDefault();
window.handleClick = handleClick;
window.handleSubmit = handleSubmit();
