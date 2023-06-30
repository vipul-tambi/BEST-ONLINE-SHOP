import React from "react";
import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const ProductCarouselComponent = ({ bestSellers }) => {
  return bestSellers.length > 0 ? (
    <Carousel>
      {bestSellers.map((item, idx) => (
        <Carousel.Item>
          <img
            crossOrigin="anonymous"
            className="d-block w-100"
            style={{ height: "45vh", objectFit: "cover" }}
            src={item.images ? item.images[0].path : null}
            alt="First slide"
          />
          <Carousel.Caption style={{ backdropFilter: "blur(2px)" }}>
            <LinkContainer
              style={{ cursor: "pointer" }}
              to={`/product-details/${item._id}`}
            >
              <h3>Best Sellers in {item.category} Category</h3>
            </LinkContainer>

            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  ) : null;
};

export default ProductCarouselComponent;
