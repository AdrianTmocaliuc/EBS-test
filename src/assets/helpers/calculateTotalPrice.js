export const calculateTotalPrice = (cart) => {
  const arr = cart.map((el) => {
    const quantities = el.quantity;
    const prices = el.price;
    return quantities * prices;
  });

  return arr.reduce((prev, next) => {
    return prev + next;
  }, 0);
};
