import { Form } from "react-bootstrap";

const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Price no greater than:</span> 10000
      </Form.Label>

      <Form.Range min={50} max={50000} step={50} />
    </>
  );
};

export default PriceFilterComponent;
