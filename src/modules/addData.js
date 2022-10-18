import { URL_API, getFoodList } from './listItems.js';
// Using getFoodList function //
const getdata = async () => {
  // create an empty array
  const datas = [];
  // awit api data
  const foodList = await getFoodList(URL_API);
  // loop to get individual data and populate important data to our array
  foodList.forEach((ata) => {
    const newarr = {
      id: ata.idMeal,
      name: ata.strMeal,
      image: ata.strMealThumb,
      category: ata.strCategory,
      origin: ata.strArea,
      cookinginstruction: ata.strInstructions,
    };
    datas.push(newarr);
  });
  return datas;
};

export default getdata;
