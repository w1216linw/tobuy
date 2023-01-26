import { Button, Col, Container, Row } from "react-bootstrap";
import cook from "../assets/cook.jpg";
import cookSingle from "../assets/cook-single.jpg";
import Recipes from '../components/Recipes'
export default function Home() {
  return (
    <>
    <Container fluid>
      <Row className="align-items-center" style={{ height: "95vh" }}>
        <Col md={12} lg={6} className="hero-text-wrapper d-flex align-items-center">
          <div style={{ width: 'clamp(20rem, 35vw + 10rem, 40rem)'}} className=" mx-auto">
            <p style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)" }}>
              Make it easy to find recipes and remind what you need to buy with
              one click!
            </p>
            <Button
              style={{ width: "7rem", height: "3rem", fontSize: '1.25rem',fontWeight: "600" }}
              variant="warning"
              >
              More
            </Button>
            <div className="bubbles"></div>
          </div>
        </Col>

        <Col md={12} lg={6} className="hero-img-single text-center">
          <picture>
            <source media="(min-width: 992px)" srcSet={cook} />
            <img
              src={cookSingle}
              style={{ width: "clamp(20rem, 35vw + 8rem, 50rem)" }}
              alt="cook image and created by pikisuperstar on Freepik"
              />
          </picture>
        </Col>
      </Row>
    </Container>
    <Recipes />
    </>
  );
}
