import './style.css';
import {getdata} from './modules/addData';
// Using getFoodList function //
  const data = async () => {
     let foodList = await getdata()
     console.log(foodList[0])
  };
  data();

