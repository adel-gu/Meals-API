import getdata from './addData';

const showMeals = async (container) => {
  const meals = await getdata();
  meals.forEach((meal) => {
    const mealTemplate = `
      <li class="col pb-4">
        <div class="card" style="width: 18rem">
          <img
            src="${meal.image}"
            class="card-img-top"
            alt="${meal.name} image"
          />
          <div class="card-body">
            <div class="card-details d-flex justify-content-between">
              <h5 class="card-title">${meal.name}</h5>
              <div class="card-likes">
                <span>5 likes</span>
                ❤️
              </div>
            </div>
            <p class="card-text">
              ${
                meal.cookinginstruction.split('.')[0]
              }... <a href="#">Read more</a>
            </p>
            <a href="#" data-id="${
              meal.id
            }" class="btn btn-primary d-block">comments</a>
          </div>
        </div>
      </li>
    `;

    container.innerHTML += mealTemplate;
  });
};

export default showMeals;
