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
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Father name</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mother Name</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>No. of family Member</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email Id</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Full Address</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Adhaar Number</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Pan Number</Form.Label>
            <Form.Control type="text"  />
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
