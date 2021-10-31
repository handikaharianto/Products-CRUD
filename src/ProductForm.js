import { useContext } from "react";
import FormGroup from "react-bootstrap/FormGroup";
import Form from "react-bootstrap/Form";
import { FormControl, FormLabel, Button, Container } from "react-bootstrap";
import { getData, postData, putData } from "./api/api";
import { DataContext } from "./App";
import { EditContext } from "./App";
import { FormContext } from "./App";

const ProductForm = () => {
  const { setData, url } = useContext(DataContext);
  const { form, setForm, INITIAL_FORM_VALUES } = useContext(FormContext);
  const { isEditMode, setIsEditMode } = useContext(EditContext);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (
      form.productName.trim() === "" ||
      form.productDescription === "" ||
      form.productPrice.trim() === ""
    ) {
      return;
    }
    const data = await postData(url, form);
    setData((prevData) => [...prevData, data]);
    setForm(INITIAL_FORM_VALUES);
  };

  function cancelEditing() {
    setIsEditMode(false);
    setForm(INITIAL_FORM_VALUES);
  }

  async function editProduct() {
    const urlToPutData = `${url}/${form.id}`;
    const updatedProduct = await putData(urlToPutData, form);
    const data = await getData(url);
    setData(data);
    setForm(INITIAL_FORM_VALUES);
    setIsEditMode(false);
  }

  return (
    <Form className="mt-5" onSubmit={handleOnSubmit}>
      <Container>
        <FormGroup className="mb-4" controlId="productName">
          <FormLabel>Product Name:</FormLabel>
          <FormControl
            type="text"
            size="sm"
            name="productName"
            value={form.productName}
            placeholder="Enter Product Name..."
            onChange={handleOnChange}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-4" controlId="productPrice">
          <FormLabel>Product Price:</FormLabel>
          <FormControl
            type="number"
            size="sm"
            name="productPrice"
            placeholder="Enter Product Price..."
            value={form.productPrice}
            onChange={handleOnChange}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-4" controlId="productDescription">
          <FormLabel>Product Description:</FormLabel>
          <FormControl
            as="textarea"
            size="sm"
            name="productDescription"
            placeholder="Enter Product Description..."
            rows={3}
            value={form.productDescription}
            onChange={handleOnChange}
          ></FormControl>
        </FormGroup>
        <div className="form-btns">
          {!isEditMode ? (
            <Button
              variant="primary"
              type="submit"
              size="sm"
              onSubmit={handleOnSubmit}
            >
              Add Product
            </Button>
          ) : (
            <>
              <Button
                variant="success"
                type="button"
                size="sm"
                onClick={editProduct}
              >
                Edit Product
              </Button>
              <Button
                className="cancel-btn"
                variant="danger"
                type="button"
                size="sm"
                onClick={cancelEditing}
              >
                Cancel Edit
              </Button>
            </>
          )}
        </div>
      </Container>
    </Form>
  );
};

export default ProductForm;
