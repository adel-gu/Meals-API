const URL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

const getFoodList = async (URL_API) => {
  const response = await fetch(URL_API);
  const json = await response.json();
  const mealList = json.meals.slice(0, 18);

  return mealList;
};

export { URL_API, getFoodList };
