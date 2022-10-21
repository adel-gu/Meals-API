import { getLikes } from './fetchLikes';

const showlike = async (txtLike) => {
  const mealId = txtLike.getAttribute('data-id');
  const likesList = await getLikes();
  const numberLikes = likesList.filter((likeObj) => likeObj.item_id === mealId);
  if (numberLikes.length > 0) {
    txtLike.innerHTML = `${numberLikes[0].likes} Likes`;
  }
};

export default showlike;
