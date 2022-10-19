import getdata from './addData';

const showMeals = async (container, pageIndex) => {
  // Get meals list
  let meals = await getdata();
  // Slice only 9 meals elements
  let limitMeals = meals.slice(pageIndex, pageIndex + 9);
  // Populate meals to the screen
  limitMeals.forEach((meal) => {
    const mealTemplate = `
      <li class="col-12 col-sm-6 col-lg-4 p-3">
        <div class="meal-card | card m-0  h-100">
          <img
            src="${meal.image}"
            class="card-img-top"
            alt="${meal.name} image"
          />
          <div class="card-body">
            <div class="card-details d-flex justify-content-between pb-3">
              <h5 class="card-title">${meal.name}</h5>
              <div class="card-likes d-flex">
                <span class="d-block">5 likes</span>
                <span>❤️</span>
              </div>
            </div>
            <div class="">
              <p class="card-text">
                ${meal.cookinginstruction.split('\n')[0]}
              </p>
            </div>
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
