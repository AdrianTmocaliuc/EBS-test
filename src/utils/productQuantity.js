const productQuantity = (cart, product, remove = false) => {
  const extraProduct = cart.find((el) => el.id === product.id);
  const extraProductIdx = cart.findIndex((el) => el.id === product.id);

  if (remove) {
    extraProduct.quantity -= 1;
  } else {
    extraProduct.quantity += 1;
  }

  if (extraProduct.quantity === 0) {
    const filterCart = cart.filter((elem) => elem.id !== product.id);
    return filterCart;
  }

  cart[extraProductIdx] = extraProduct;
  return cart;
};

export default productQuantity;
