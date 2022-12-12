/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Form, Button, Container } from "react-bootstrap";

const GenerateId = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Create Partner Id
          </span>
        </div>
      </section>

      <Container style={{ width: "800px", marginTop: "2%" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Father name</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="outline-primary">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default HOC(GenerateId);
