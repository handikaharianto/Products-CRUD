import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavbarBrand href="/">myStore</NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Header;
