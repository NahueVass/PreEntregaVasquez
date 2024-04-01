
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Navbar.Brand href="/">Mi Tienda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/category/:id">Category</Nav.Link>
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
          { }
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;