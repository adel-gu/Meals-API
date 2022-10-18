import './style.css';
import getdata from './modules/addData.js';
// Using getFoodList function //
const data = async () => {
  const foodList = await getdata();
  return foodList;
  // console.log(foodList[0]);
};
data();
