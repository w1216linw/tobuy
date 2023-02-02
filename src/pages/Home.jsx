import { Col, Container, Row } from "react-bootstrap";
import cook from "../assets/cook.jpg";
import cookSingle from "../assets/cook-single.jpg";
import Recipes from '../components/Recipes'
export default function Home() {
  return (
    <>
    <Container fluid>
      <Row id='home-intro' className="align-items-center">
        <Col md={12} lg={6} className="hero-text-wrapper d-flex align-items-center">
          <div style={{ width: 'clamp(20rem, 35vw + 10rem, 40rem)'}} className=" mx-auto">
            <p style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)" }}>
              Make it easy to find recipes and remind what you need to buy with
              one click!
            </p>
            <a href="#section-search" className="btn btn-warning text-uppercase fw-bold px-4 py-2">try it</a>
            <div className="bubbles"></div>
          </div>
        </Col>

        <Col md={12} lg={6} className="hero-img-single text-center">
          <picture>
            <source media="(min-width: 992px)" srcSet={cook} />
            <img
              src={cookSingle}
              style={{ width: "clamp(20rem, 35vw + 8rem, 50rem)" }}
              alt="cook illustration created by pikisuperstar on Freepik"
              />
          </picture>
        </Col>
      </Row>
    </Container>
    <Recipes/>
    </>
  );
}
