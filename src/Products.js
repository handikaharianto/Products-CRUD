import { useContext } from "react";
import Info from "./Info";
import Product from "./Product";
import { DataContext } from "./App";

const Products = ({ loading, error }) => {
  const { data: products } = useContext(DataContext);

  return (
    <main className="products">
      {loading ? (
        <Info message="Loading..." />
      ) : !loading && products.length <= 0 ? (
        <Info message="No products to show!" />
      ) : error ? (
        <Info message="Failed to fetch data!" />
      ) : (
        products.map((product, index) => {
          return <Product key={index} {...product} />;
        })
      )}
    </main>
  );
};

export default Products;
