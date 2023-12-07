import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./../assets/logo.png";

const Navs = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" style={{ width: 140 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center fw-bold ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profil">Profil</Nav.Link>
              <Nav.Link href="/produk">Produk</Nav.Link>
              <Nav.Link href="/galeri">Galery</Nav.Link>
            </Nav>

            <div className="text-center">
              <button className="btn btn-dark ">Login</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navs;
