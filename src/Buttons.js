import { useContext } from "react";
import { deleteData } from "./api/api";
import { EditContext } from "./App";
import { DataContext } from "./App";
import { FormContext } from "./App";

import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Buttons = ({ id }) => {
  const { data, setData } = useContext(DataContext);
  const { setForm, INITIAL_FORM_VALUES } = useContext(FormContext);
  const { setIsEditMode } = useContext(EditContext);

  async function deleteProduct(e) {
    const productId = parseInt(e.currentTarget.dataset.id);
    const url = `http://localhost:3000/employees/${productId}`;
    const data = await deleteData(url);

    setData((prevData) => {
      const updatedProducts = prevData.filter(
        (product) => product.id !== productId
      );
      return updatedProducts;
    });
    setIsEditMode(false);
    setForm(INITIAL_FORM_VALUES);
  }

  function editProduct(e) {
    const productId = parseInt(e.currentTarget.dataset.id);
    const productToEdit = data.find((product) => product.id === productId);
    setForm(productToEdit);
    setIsEditMode(true);
  }

  return (
    <div className="product-buttons">
      <button
        className="edit-btn"
        type="button"
        data-id={id}
        onClick={editProduct}
      >
        <BiEdit />
      </button>
      <button
        className="delete-btn"
        type="button"
        data-id={id}
        onClick={deleteProduct}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default Buttons;
