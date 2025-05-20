import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'gold', fontWeight: '700', fontSize: '1.5rem' }}>
          <FontAwesomeIcon icon={faVideoSlash} className="me-2" />
          Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
          </Nav>
          <div className="d-flex gap-2">
            <Button variant="outline-info" onClick={() => navigate("/login")}>Login</Button>
            <Button variant="outline-info" onClick={() => navigate("/register")}>Register</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
