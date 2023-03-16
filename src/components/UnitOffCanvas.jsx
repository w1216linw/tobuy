import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { QuestionOctagon } from "react-bootstrap-icons";
import UnitConverter from "./UnitConverter";

const option = {
  name: "Enable body scrolling",
  scroll: true,
  backdrop: false,
  placement: "bottom",
};

export default function OffCanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button
        className="unit-btn"
        size="sm"
        variant="outline-secondary"
        onClick={toggleShow}
      >
        <div className="d-flex align-items-center gap-2">
          <QuestionOctagon />
          Unit
        </div>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...option}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Unit Converter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>US Measurement</p>
          <div className="unit-exp | d-flex gap-5">
            <p>1 gallon = 4 quart</p>
            <p>1 quart = 2 pin</p>
            <p>1 pin = 2 cup </p>
            <p>1 cup = 16 tbsp</p>
            <p>1 1tbs = 3 tsp</p>
          </div>
          <UnitConverter />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
