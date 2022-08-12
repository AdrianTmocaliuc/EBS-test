export const calculateTotalPrice = (cart) => {
  const arr = cart.map((el) => {
    const quantities = el.quantity;
    const prices = el.price;
    return quantities * prices;
  });

  const result = arr.reduce((prev, next) => {
    return prev + next;
  }, 0);

  return Math.round(result * 100) / 100;
};
