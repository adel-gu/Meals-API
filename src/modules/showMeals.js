import getdata from './mealsList';

const showMeals = async (container) => {
  // Get meals list
  const meals = await getdata();

  // Populate meals to the screen
  meals.forEach((meal) => {
    const mealTemplate = `
      <li class="col-12 col-sm-6 col-lg-4 p-3">
        <div class="meal-card | card m-0">
          <img
            src="${meal.image}"
            class="card-img-top"
            alt="${meal.name} image"
          />
          <div class="card-body">
            <div class="card-details d-flex justify-content-between pb-3">
              <div class="w-50">
                <h5 class="card-title shorten-text">${meal.name}</h5>
                <span class="card-likes-txt d-block" data-id="${meal.id}">0 Likes</span>
              </div>
              <div>
                <button class="card-likes d-flex btn btn-danger" data-id="${meal.id}">
                  💛
                </button>
              </div>
            </div>
            <button href="#" data-id="${meal.id}" onclick="handleCommentClick([${meal.id}, '${meal.name}', '${meal.category}', '${meal.image}', '${meal.origin}'])" class="btn btn-dark d-block w-100">comments</button>
          </div>
        </div>
      </li>
    `;

    container.innerHTML += mealTemplate;
  });
};

export default showMeals;
