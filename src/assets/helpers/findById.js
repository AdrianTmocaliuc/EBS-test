export const findById = (array, product) => {
  return array.find((el) => el.id === product.id);
};
