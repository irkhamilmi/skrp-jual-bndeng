import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./../assets/logo1.png";

const Navs = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" style={{ width: 140 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center fw-bold">
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/produk" style={{ color: "white" }}>
                Produk
              </Nav.Link>
              <Nav.Link href="/galeri" style={{ color: "white" }}>
                Galery
              </Nav.Link>
            </Nav>

            <div className="text-center">
              <button className="btn btn-outline-light ">Login</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navs;
