import { MdDeleteSweep } from "react-icons/md";

function Book(props) {
  const { isbn, author, title, pbYear } = props.book;
  // console.log(props);

  return (
    <tr>
      <td>{isbn}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{pbYear}</td>
      <td onClick={() => props.deleteBook(isbn)}>
        <MdDeleteSweep color="red" />
      </td>
    </tr>
  );
}

export default Book;
