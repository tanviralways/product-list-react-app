import { useState } from "react";
import Product from "../product/Product";

function ProductList() {
  // main array of objects state || books state || books array of objects //
  //input field states
  //add products
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");

  const clearInputField = () => {
    setName("");
    setPrice("");
    setQuantity("");
    setSize("");
  };

  const handleSubmited = (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
      quantity,
      size,
    };
    setProducts([...products, product]);
    clearInputField("");
  };

  // clear data
  const deleteProduct = (name) => {
    const rest = products.filter((product) => {
      product.name !== name;
    });
    setProducts(rest);
  };

  const removeAll = () => {
    setProducts([]);
  };
  // form submit event // delete book from LS // saving data to local storage;
  return (
    <div>
      <div className="wrapper">
        <h1 className="text-white bg-dark mx-auto w-25 rounded p-2">
          Product List App
        </h1>
        <p className="">Add and view your products using local storage</p>
        <div className="main d-sm-flex flex-sm-row gap-10  ">
          <div className="form-container mb-5">
            <form onSubmit={handleSubmited}>
              <label>NAME</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                className="form-control"
                required></input>
              <br></br>
              <label>PRICE</label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                value={price}
                type="text"
                className="form-control"
                required></input>
              <br></br>
              <label>QUANTITY</label>
              <input
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                value={quantity}
                type="text"
                className="form-control"
                required></input>
              <br></br>
              <label>SIZE</label>
              <input
                onChange={(e) => {
                  setSize(e.target.value);
                }}
                value={size}
                type="text"
                className="form-control"
                required></input>
              <br></br>
              <button
                type="submit"
                className="mb-5 btn btn-outline-success btn-md">
                ADD
              </button>
            </form>
          </div>

          <div className="view-container border  border-info">
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th>SIZE</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <Product
                        deleteProduct={deleteProduct}
                        product={product}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={removeAll}
                className="btn btn-outline-danger btn-md">
                Remove All
              </button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
