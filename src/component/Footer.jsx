import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-5">
        <Container className="text-center text-md-start">
          <Row className="text-center text-md-start">
            <Col className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <img
                src={logo}
                style={{ width: "170px", marginBottom: "10px" }}
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                incidunt?Lorem, ipsum dolor.
              </p>
            </Col>
            <Col className="col-md-2 col-lg-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bold text-warning">
                Produk
              </h5>
              <p>
                <a href="" className="text-light text-decoration-none">
                  Bandeng
                </a>
              </p>
              <p>
                <a href="" className="text-light text-decoration-none">
                  Kakap
                </a>
              </p>
              <p>
                <a href="" className="text-light text-decoration-none">
                  Nila
                </a>
              </p>
              <p>
                <a href="" className="text-light text-decoration-none">
                  Gurami
                </a>
              </p>
            </Col>
            <Col className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bold text-warning">
                Media Sosial
              </h5>
              <p>
                <a href="" className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    color="white"
                    className="me-1"
                  />{" "}
                  Instagram
                </a>
              </p>
              <p>
                <a href="" className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    color="white"
                    className="me-1"
                  />{" "}
                  Facebook
                </a>
              </p>
              <p>
                <a href="" className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    color="white"
                    className="me-1"
                  />{" "}
                  Twitter
                </a>
              </p>
            </Col>
            <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bold text-warning">
                Kontak
              </h5>
              <p>
                <a href="" className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    icon={faMap}
                    color="white"
                    className="me-1"
                  />{" "}
                  Indonesia, Central Java
                </a>
              </p>
              <p>
                <a href="" className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    icon={faPhone}
                    color="white"
                    className="me-1"
                  />{" "}
                  +62 **********
                </a>
              </p>
            </Col>
          </Row>
          <hr className="mb-4" />
          <Row>
            <Col className="text-center">
              <p>
                Copyright ©️2023 All right reversed by:
                <a href="" className="text-decoration-none">
                  The Bandeng
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
