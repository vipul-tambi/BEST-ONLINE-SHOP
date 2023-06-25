import React from "react";
import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const ProductCarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "45vh", objectFit: "cover" }}
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption style={{ backdropFilter: "blur(2px)" }}>
          <LinkContainer style={{ cursor: "pointer" }} to="/product-details">
            <h3>Best Sellers in Laptops Category</h3>
          </LinkContainer>

          <p>Dell inspiron 15 3000 Laptop, 15.6 inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          style={{ height: "45vh", objectFit: "cover" }}
          alt="Second slide"
        />

        <Carousel.Caption style={{ backdropFilter: "blur(2px)" }}>
          <LinkContainer style={{ cursor: "pointer" }} to="/product-details">
            <h3>Best Sellers in Books Category</h3>
          </LinkContainer>
          <p>World of Eric Carle, Hear Bear Roar 30-Button Animal Sound Book</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          style={{ height: "45vh", objectFit: "cover" }}
          alt="Third slide"
        />

        <Carousel.Caption style={{ backdropFilter: "blur(2px)" }}>
          <LinkContainer style={{ cursor: "pointer" }} to="/product-details">
            <h3>Best Sellers in Cameras Category</h3>
          </LinkContainer>
          <p>
            4K Camcoder Video Camera 60FPS Vlogging Camera for YouTube Wifi 16X
            Digital Camera
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
