import axios from "axios";

// make a request to local server at `route` with `params`
// route can be 'products/17069/styles/' or 'reviews/' etc.
// example params
// let queryParams = {
//   product_id: 17069,
//   count: 14,
//   page: 2
// }
export function getFromApi(route, params, callback) {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3000/hr-rfp/${route}`, { params })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      });
  })
}

// represents products/product_id/
export function getProduct(product_id) {
  return getFromApi(`products/${product_id}`);
}

// represents products/product_id/styles
export function getStyles(product_id) {
  return getFromApi(`products/${product_id}/styles`);
}

// represents reviews/meta?product_id=00000
export function getRatings(product_id) {
  return getFromApi(`reviews/meta?product_id=${product_id}`);
}



// to be added
export function postToApi(queryOptions, callback) {
  queryOptions = {
    method: "post",
    url: `http://localhost:3000/hr-rfp/`,
    data: {
      product_id: 17069,
    },
  };
  axios(queryOptions)
  .then((res) => {
    callback(null, res.data);
  })
  .catch((err) => {
    callback(err);
  });
}
