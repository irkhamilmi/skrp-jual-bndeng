import { Container, Row, Col } from "react-bootstrap";
import hero from "./../assets/img/hero1.jpg";
import hero2 from "./../assets/img/hero2.jpg";
import hero3 from "./../assets/img/hero3.jpg";

import Carousel from "react-bootstrap/Carousel";
import { Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="home">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="d-flex align-items-center">
              <Col className="lg-6">
                <h1 className="mb-4 fw-bold">
                  Jual Bandeng Presto
                  <br />
                  Enak, Gurih & Bergizi
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
              <div
                className=" px-auto p-3 shadow rounded-4"
                style={{ width: "550px" }}
              >
                <Row className="text-center">
                  <Col>
                    <h2>Laku </h2>
                  </Col>
                  <Col>
                    <h2>
                      100
                      <span className="fs-5">Pcs</span>
                    </h2>
                  </Col>
                  <Col>
                    <h2>Perhari</h2>
                  </Col>
                </Row>
              </div>
            </Row>
          </Container>
        </header>

        <div className="my-5 mx-auto">
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
              </div>

              <div
                className="card mt-5 mb-3 mx-auto"
                style={{ maxWidth: "800px" }}
              >
                <div className="row ">
                  <div className="col-md-4 p-0">
                    <img src={hero} className="w-100 rounded-start " />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title fw-bold mb-3">
                        Best Bandeng Presto <br />
                        Since 2023
                      </h2>
                      <p className="card-text mb-4">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Laboriosam, suscipit?
                      </p>
                      <button className="btn btn-danger">Order Disini</button>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Home;
