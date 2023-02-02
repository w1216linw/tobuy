import { NavLink, Outlet } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BookmarkHeart, BookmarkPlus } from "react-bootstrap-icons";
export default function Layout() {
  return (
    <>
      <Navbar className="bg-white shadow-sm mb-3 px-5">
        <Container fluid>
          <Nav>
            <Nav.Link to={"/"} as={NavLink} className='fs-5'>
              Home
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link to={"/likes"} as={NavLink}>
            <div><span className="visually-hidden">Liked recipes</span><BookmarkHeart className="fs-5"/></div>
          </Nav.Link>
          <Nav.Link to={"/tobuys"} as={NavLink}>
            <div><span className="visually-hidden">Tobuy items</span><BookmarkPlus className="fs-5"/></div>   
          </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
