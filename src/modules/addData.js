import { URL_API, getFoodList } from './listItems';
// Using getFoodList function //
const getdata = async () => {
  // create an empty array
  const datas = [];
  // awit api data
  let foodList = await getFoodList(URL_API);
  // loop to get individual data and populate important data to our array
  for(let s of foodList){
    const newarr = {
      id: s.idMeal,
      name: s.strMeal,
      image: s.strMealThumb,
      category: s.strCategory,
      origin: s.strArea,
      cookinginstruction: s.strInstructions
    }
    // push our new data
    datas.push(newarr);
  }
  return datas;
};

export {getdata}