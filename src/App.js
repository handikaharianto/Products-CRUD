import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductForm from "./ProductForm";
import Header from "./Header";
import Products from "./Products";
import useFetch from "./useFetch";

const url = "http://localhost:3000/employees";

// USE THIS AS A REFERENCE FOR OPTIMIZATION AND BEST PRACTICES https://github.com/PaulBratslavsky/reactcrud/tree/master/src

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
