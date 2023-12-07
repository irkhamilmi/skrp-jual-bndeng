import { Container, Row, Col } from "react-bootstrap";
import hero from "./../assets/img/hero1.jpg";
import hero2 from "./../assets/img/hero2.jpg";
import hero3 from "./../assets/img/hero3.jpg";

import Carousel from "react-bootstrap/Carousel";
import { Card, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  return (
    <>
      <div className="home">
        <header className="w-100 min-vh-100 pt-5">
          <Container>
            <Row>
              <Col className="lg-6">
                <h1 className="mb-4 fw-bold">
                  Jual Bandeng Presto
                  <br />
                  Enak & Gurih Siap Menerima <br /> Pesanan dengan Jumlah
                  Banyak.
                </h1>
                <p className="mb-4 ">
                  Jual bandeng presto dengan cita rasa yang tinggi dan enak. Ayo
                  buruan beli tunggu apalagi !!! Segera goyangkan lindah anda.
                </p>
                <button className="btn btn-danger rounded-1">
                  Lihat Produk
                </button>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5">
                <Carousel>
                  <Carousel.Item>
                    <img src={hero3} alt="" />
                    <Carousel.Caption
                      style={{ color: "black" }}
                    ></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={hero3} alt="" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={hero3} alt="" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </header>

        <div className="my-5 w-100 min-vh-100">
          <Container>
            <Row>
              <h1 className="text-center fw-bold">Menu favorit</h1>
              <p className="text-center mb-5">
                Silahkan di order dengan sesuka anda saya pastikan anda suka
                semua.
              </p>

              <div className="row row-cols-1 row-cols-sm-3 mt-4">
                <Col>
                  <div className="col card text-black border shadow rounded-4 my-3">
                    <img
                      src={hero3}
                      alt=""
                      className="rounded-top-4 w-full h-full object-cover"
                    />
                    <div className="p-3">
                      <h4>
                        <strong>Bandeng presto</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="col card text-black border shadow rounded-4 my-3">
                    <img
                      src={hero3}
                      alt=""
                      className="rounded-top-4 w-full h-full object-cover"
                    />
                    <div className="p-3">
                      <h4>
                        <strong>Bandeng presto</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="col card text-black border shadow rounded-4 my-3">
                    <img
                      src={hero3}
                      alt=""
                      className="rounded-top-4 w-full h-full object-cover"
                    />
                    <div className="p-3">
                      <h4>
                        <strong>Bandeng presto</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="col card text-black border shadow rounded-4 my-3">
                    <img
                      src={hero3}
                      alt=""
                      className="rounded-top-4 w-full h-full object-cover"
                    />
                    <div className="p-3">
                      <h4>
                        <strong>Bandeng presto</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="col card text-black border shadow rounded-4 my-3">
                    <img
                      src={hero3}
                      alt=""
                      className="rounded-top-4 w-full h-full object-cover"
                    />
                    <div className="p-3">
                      <h4>
                        <strong>Bandeng presto</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="col card text-black border shadow rounded-4 my-3">
                    <img
                      src={hero3}
                      alt=""
                      className="rounded-top-4 w-full h-full object-cover"
                    />
                    <div className="p-3">
                      <h4>
                        <strong>Bandeng presto</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </Container>
        </div>

        <div className="my-5 pt-5 w-100 min-vh-100">
          <Container>
            <Row>
              <h2 className="text-center fw-bold mb-5">
                Pertanyaan yang sering ditanyakan
              </h2>
              <Row className="row-cols-lg-2 row-cols-1 shadow g-4">
                <Col>
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Apakah ikan fesh ?</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Bagaimana cara pengolahan nya ?
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
                <Col>
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Berapa hari expired ?</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Apakah mengandung obat-obatan khusus ?
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Home;
