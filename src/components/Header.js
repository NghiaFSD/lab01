import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { BsBag } from "react-icons/bs";

function Header({ cartQuantity }) {
  return (
    <Navbar expand="lg" sticky="top" className="fashion-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <img src="/images/logo.jpg" alt="Fashion logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navigation" />

        <Navbar.Collapse id="main-navigation">
          <Nav className="mx-auto navigation-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#cart" aria-label={`Cart with ${cartQuantity} items`} className="cart-status">
              <BsBag size={21} />
              <Badge bg="primary" pill>
                {cartQuantity}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
