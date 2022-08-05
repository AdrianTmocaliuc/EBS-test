const BASE_URL = 'http://localhost:3001/api/';

async function fetchCatchErrors(url = '', config = {}) {
  const res = await fetch(url, config);

  return res.ok ? res.json() : Promise.reject(new Error('Error'));
}

export function getProducts() {
  return fetchCatchErrors(`${BASE_URL}products`);
}
