const appId = 'Wyu5tsnxyP8SUDrhnO7g';
const URL_API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

// Add a like
const addLike = async (idItem) => {
  await fetch(URL_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: idItem,
    }),
  });
};

// Get likes
const getLikes = async () => {
  const response = await fetch(URL_API);
  const result = await response.json();
  return result;
};

export { addLike, getLikes };
