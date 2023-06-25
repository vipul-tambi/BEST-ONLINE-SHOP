import React, { Fragment, useState } from "react";
import { Toast, Form, Button } from "react-bootstrap";
const AdminChatRoomComponent = () => {
  const [toast1, closeToast1] = useState(true);
  const close1 = () => closeToast1(false);
  const [toast2, closeToast2] = useState(true);
  const close2 = () => closeToast2(false);

  return (
    <>
      <Toast show={toast1} onClose={close1} className="bg-warning ms-4 mb-5">
        <Toast.Header className="bg-warning">
          <strong className="me-auto text-primary">Chat with John Doe</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: "300px", overflow: "auto" }}>
            {Array.from({ length: 30 }).map((_, idx) => (
              <Fragment key={idx}>
                <p className="bg-white p-3 me-5 rounded-3">
                  <b>User wrote:</b> Hello world| This is a chat message
                </p>
                <p className="bg-primary p-3 text-light ms-5 rounded-3">
                  <b>Admin wrote:</b> Hello world| This is a chat message
                </p>
              </Fragment>
            ))}
          </div>

          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a message</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Toast.Body>
      </Toast>

      <Toast show={toast2} onClose={close2} className="bg-warning ms-4 mb-5">
        <Toast.Header className="bg-warning">
          <strong className="me-auto text-primary">Chat with John Doe2</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: "300px", overflow: "auto" }}>
            {Array.from({ length: 30 }).map((_, idx) => (
              <Fragment key={idx}>
                <p className="bg-white p-3 me-5 rounded-3">
                  <b>User wrote:</b> Hello world| This is a chat message
                </p>
                <p className="bg-primary p-3 text-light ms-5 rounded-3">
                  <b>Admin wrote:</b> Hello world| This is a chat message
                </p>
              </Fragment>
            ))}
          </div>

          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a message</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default AdminChatRoomComponent;
