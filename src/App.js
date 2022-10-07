function App() {
  const products = [
    {
      id: 1,
      name: "Mouse",
      color: "Black",
      price: 6000,
      qty: 3
    },
    {
      id: 2,
      name: "Keyboard",
      color: "White",
      price: 3000,
      qty: 5
    },
    {
      id: 3,
      name: "Speakers",
      color: "Black",
      price: 10000,
      qty: 2
    }
  ];

  function updateProduct(productId, newQty) {

    let updatedList = products.map(product => {

      let quantity = product.qty;

      if (productId == product.id) {
        quantity = quantity + newQty;
      }

      return (
        {
          id: product.id,
          name: product.name,
          color: product.color,
          price: product.price,
          qty: quantity
        }
      );
    });

    console.log(updatedList);

  }

  updateProduct(2, 3);

  // function removeItem() {
  //   let updatedList = products.filter(product => product.price < 5000);

  //   console.log(updatedList);
  // }

  return (
    <>
      <h1>React App</h1>
    </>
  );
}

export default App;
