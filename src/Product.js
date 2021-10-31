import { useContext } from "react";
import Buttons from "./Buttons";
import { DataContext } from "./App";
import { Card } from "react-bootstrap";

const Product = ({ id, productName, productDescription, productPrice }) => {
  const { setData } = useContext(DataContext);

  const handleMouseHover = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  return (
    <Card onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
      <div className="img-container">
        <Card.Img
          className="bg-light"
          src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
        />
        <Buttons id={id} setData={setData} />
      </div>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{productName}</Card.Title>
          <span>${productPrice}</span>
        </div>
        <Card.Text>{productDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
