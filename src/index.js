import './style.css';
// import getdata from './modules/addData.js';
import populateComment from './modules/populateComment.js';

// get the inolvment api
// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JYgfQKZR5xfkqirl6kPQ/comments';

// Using getFoodList function //

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