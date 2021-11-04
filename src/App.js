import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductForm from "./ProductForm";
import Header from "./Header";
import Products from "./Products";
import useFetch from "./useFetch";

// GitHub url to this API: https://github.com/handikaharianto/products-api
const url = "https://han-products-api.herokuapp.com/products";

const INITIAL_FORM_VALUES = {
  productName: "",
  productDescription: "",
  productPrice: "",
};

export const DataContext = createContext();
export const FormContext = createContext();
export const EditContext = createContext();

function App() {
  const { data, loading, error, setData } = useFetch(url);
  const [form, setForm] = useState(INITIAL_FORM_VALUES);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <DataContext.Provider value={{ data, setData, url }}>
      <FormContext.Provider value={{ form, setForm, INITIAL_FORM_VALUES }}>
        <EditContext.Provider value={{ isEditMode, setIsEditMode }}>
          <Header />
          <ProductForm />
          <Products loading={loading} error={error} />
        </EditContext.Provider>
      </FormContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
