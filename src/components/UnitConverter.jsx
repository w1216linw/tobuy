import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { convert } from "../utilities/converterCalc";

const units = ["cup", "tbsp", "tsp"];

export default function UnitConverter() {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  const [fromUnit, setFromUnit] = useState("cup");
  const [toUnit, setToUnit] = useState("cup");

  const fromUnitRef = useRef();
  const toUnitRef = useRef();

  useEffect(() => {
    setToValue(convert(fromUnit, toUnit, fromValue));
  }, [fromValue, fromUnit, toUnit]);

  return (
    <Row>
      <Col md="12" className="d-flex justify-content-center">
        <input
          type="number"
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
        />
        <select
          name="fromUnit"
          id="fromUnit"
          ref={fromUnitRef}
          onChange={() => {
            setFromUnit(fromUnitRef.current.value);
          }}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <span className="mx-2">=</span>
        <select
          name="toUnit"
          id="toUnit"
          ref={toUnitRef}
          onChange={() => {
            setToUnit(toUnitRef.current.value);
          }}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </Col>
      <Col className="d-flex justify-content-center">
        <div className="d-flex gap-5 ">
          <p>
            {fromValue}
            <span className="ms-2">{fromUnit}</span>
          </p>
          <span>=</span>
          <p>
            {toValue}
            <span className="ms-2">{toUnit}</span>
          </p>
        </div>
      </Col>
    </Row>
  );
}
