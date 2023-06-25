import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AddedToCartMessageComponent = ({
  showCartMessage,
  setShowCartMessage,
}) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (showCartMessage) {
    return (
      <Alert
        variant="success"
        onClose={() => setShowCartMessage(false)}
        dismissible
      >
        <Alert.Heading>The product was added to your cart!</Alert.Heading>
        <p>
          <Button variant="success" onClick={goBack}>
            Go Back
          </Button>
          {"  "}
          <Link to="/cart">
            <Button variant="danger">Go to Cart</Button>
          </Link>
        </p>
      </Alert>
    );
  }
};

export default AddedToCartMessageComponent;
