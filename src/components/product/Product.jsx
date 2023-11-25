import { MdDeleteForever } from "react-icons/md";

function Product(props) {
  console.log(props.product.name);
  const { name, price, quantity, size } = props.product;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{size}</td>
      <td onClick={() => props.deleteProduct(name)}>
        <MdDeleteForever color="red" />
      </td>
    </tr>
  );
}

export default Product;
