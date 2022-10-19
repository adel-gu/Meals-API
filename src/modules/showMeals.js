import getdata from './addData';

const showMeals = async (container, pageIndex) => {
  // Get meals list
  const meals = await getdata();
  // Slice only 9 meals elements
  const limitMeals = meals.slice(pageIndex, pageIndex + 9);
  // Populate meals to the screen
  limitMeals.forEach((meal) => {
    const mealTemplate = `
      <li class="col-12 col-sm-6 col-lg-4 p-3">
        <div class="meal-card | card m-0">
          <img
            src="${meal.image}"
            class="card-img-top"
            alt="${meal.name} image"
          />
          <div class="card-body">
            <div class="card-details d-flex justify-content-between align-items-start pb-3">
              <h5 class="card-title">${meal.name}</h5>
              <div>
                <button class="card-likes d-flex btn btn-danger">
                  <span class="heart"><i class="bi bi-suit-heart"></i></span>
                </button>
                <span class="d-block me-2">5 likes</span>
              </div>
            </div>
            <a href="#" data-id="${meal.id}" class="btn btn-dark d-block">comments</a>
          </div>
        </div>
      </li>
    `;

    container.innerHTML += mealTemplate;
  });
};

export default showMeals;
