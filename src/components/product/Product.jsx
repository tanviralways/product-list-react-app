import { MdDeleteForever } from "react-icons/md";

function Product(props) {
  console.log(props.product);
  const { name, price, quantity, size, color, description } = props.product;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{size}</td>
      <td>{color}</td>
      <td>{description}</td>
      <td onClick={() => props.deleteProduct(name)}>
        <MdDeleteForever color="red" />
      </td>
    </tr>
  );
}

export default Product;
