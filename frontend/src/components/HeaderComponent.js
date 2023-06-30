import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { getCategories } from "../redux/actions/categoryActions";
import socketIOClient from "socket.io-client";

import {
  setChatRooms,
  setSocket,
  setMessageReceived,
  removeChatRoom,
} from "../redux/actions/chatActions";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const { categories } = useSelector((state) => state.getCategories);
  const { messageReceived } = useSelector((state) => state.adminChat);
  const [searchCategoryToggle, setSearchCategoryToggle] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const submitHandler = (e) => {
    if (e.keyCode && e.keyCode !== 13) return;
    e.preventDefault();
    if (searchQuery.trim()) {
      if (searchCategoryToggle === "All") {
        navigate(`/product-list/search/${searchQuery}`);
      } else {
        navigate(
          `/product-list/category/${searchCategoryToggle.replaceAll(
            "/",
            ","
          )}/search/${searchQuery}`
        );
      }
    } else if (searchCategoryToggle !== "All") {
      navigate(
        `/product-list/category/${searchCategoryToggle.replaceAll("/", ",")}`
      );
    } else {
      navigate("/product-list");
    }
  };

  useEffect(() => {
    if (userInfo.isAdmin) {
      // var audio = new Audio("/audio/chat-msg.mp3");
      const socket = socketIOClient();
      socket.emit(
        "admin connected with server",
        "Admin" + Math.floor(Math.random() * 1000000000000)
      );

      socket.on(
        "server sends message from client to admin",
        ({ user, message }) => {
          dispatch(setSocket(socket));
          dispatch(setChatRooms(user, message));
          dispatch(setMessageReceived(true));

          // audio.autoplay = true;
          // setTimeout(function () {
          //   audio.play();
          // }, 150);
        }
      );
      socket.on("disconnected", ({ reason, socketId }) => {
        //   console.log(socketId, reason)
        dispatch(removeChatRoom(socketId));
      });
      return () => socket.disconnect();
    }
  }, [userInfo.isAdmin]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton
                id="dropdown-basic-button"
                title={searchCategoryToggle}
              >
                <Dropdown.Item onClick={() => setSearchCategoryToggle("All")}>
                  All
                </Dropdown.Item>

                {categories.map((category, id) => (
                  <Dropdown.Item
                    key={id}
                    onClick={() => setSearchCategoryToggle(category.name)}
                  >
                    {category.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>

              <Form.Control
                onKeyUp={submitHandler}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search in shop..."
              />
              <Button onClick={submitHandler} variant="warning">
                <i className="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>

          <Nav>
            {userInfo && userInfo.isAdmin ? (
              <LinkContainer to="/admin/orders">
                <Nav.Link>
                  Admin
                  {messageReceived && (
                    <span class="position-absolute top-1 start-8 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
                  )}
                </Nav.Link>
              </LinkContainer>
            ) : userInfo && userInfo.name && !userInfo.isAdmin ? (
              <NavDropdown
                title={`${userInfo.name} ${userInfo.lastName}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  eventKey="/user/my-orders"
                  as={Link}
                  to="/user/my-orders"
                >
                  My Orders
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => dispatch(logout())}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </>
            )}

            <Nav.Link href="/cart">
              <i className="bi bi-minecart"></i>
              <span className="mr-1">CART</span>

              <Badge pill bg="danger">
                {itemsCount === 0 ? "" : itemsCount}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
