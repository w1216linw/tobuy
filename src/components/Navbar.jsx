import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar className="bg-white shadow-sm mb-3 px-5" expand="md">
      <Container fluid>
        <Navbar.Brand to={"/"} as={NavLink} className="fs-5">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-links" />
        <Navbar.Collapse id="navbar-links">
          <Nav className="ms-auto">
            <Nav.Link to={"/likes"} as={NavLink}>
              Recipes
            </Nav.Link>
            <Nav.Link to={"/tobuys"} as={NavLink}>
              List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
