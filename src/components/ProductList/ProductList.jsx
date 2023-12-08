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
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  const clearInputField = () => {
    setName("");
    setPrice("");
    setQuantity("");
    setSize("");
    setColor("");
    setDescription("");
  };

  const handleSubmited = (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
      quantity,
      size,
      color,
      description,
    };
    setProducts([...products, product]);
    clearInputField();
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
                type="number"
                className="form-control"
                required></input>
              <br></br>
              <label>QUANTITY</label>
              <input
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                value={quantity}
                type="number"
                className="form-control"
                required></input>
              <br></br>
              <label>SIZE</label>
              <input
                onChange={(e) => {
                  setSize(e.target.value);
                }}
                value={size}
                type="number"
                className="form-control"
                required></input>
              <br></br>
              <label>Colors</label>

              <select
                onChange={(e) => setColor(e.target.value)}
                name="colors"
                id="colors"
                value={color}>
                <option value="none">none</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="black">black</option>
              </select>
              <br></br>
              <label>Description</label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                name=""
                value={description}
                id=""
                cols="54"
                rows="4"></textarea>
              <button
                type="submit"
                className="mb-5 btn bg-btn-primary btn-outline-success btn-md">
                ADD
              </button>
            </form>
          </div>
          {products.length ? (
            <div className="view-container border  border-info">
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SIZE</th>
                        <th>COLOR</th>
                        <th>DESCRIPTION</th>
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
          ) : (
            <h1 className="text-primary border border-info">
              No product added yet
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
