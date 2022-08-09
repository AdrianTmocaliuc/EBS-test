import React from 'react';

const CartTable = ({ cart }) => {
  // const [cart, setCart] = useState([]);
  // console.log(cart);

  // useEffect(() => {
  //   let localMemory = localStorage.getItem('cart');
  //   if (localMemory) {
  //     setCart([...JSON.parse(localMemory)]);
  //   }
  // }, []);

  return (
    <>
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, name, category, price }) => {
            return (
              <tr key={id}>
                <td>{category.name}</td>
                <td>{name}</td>
                <td>0</td>
                <td>{price}</td>
                <td>Remove</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CartTable;
