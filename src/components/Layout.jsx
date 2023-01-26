import { NavLink, Outlet } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BookmarkHeart, BookmarkPlus } from "react-bootstrap-icons";
export default function Layout() {
  return (
    <>
      <Navbar className="bg-white shadow-sm mb-3 px-5">
        <Container fluid>
          <Nav>
            <Nav.Link to={"/"} as={NavLink}>
              Home
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link to={"/likes"} as={NavLink}>
            <BookmarkHeart className="fs-5"/>
          </Nav.Link>
          <Nav.Link to={"/tobuys"} as={NavLink}>
            <BookmarkPlus className="fs-5"/>
          </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
