export const calculateTotalProducts = (cart) => {
  const getQuantity = cart?.map((el) => el.quantity);
  return getQuantity?.reduce((prev, next) => {
    return prev + next;
  }, 0);
};
