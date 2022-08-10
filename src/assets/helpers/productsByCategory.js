export const productsByCategory = (products, select) => {
  if (select === 'Category') {
    return products;
  }

  return products?.filter((el) => el.category.id === select);
};
