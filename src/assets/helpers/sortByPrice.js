export const sortByPrice = (arr, descendant) => {
  return [...arr]?.sort((first, second) => (descendant ? first.price - second.price : second.price - first.price));
};
