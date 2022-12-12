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

      <Container className="formD" style={{marginBottom : '10%'}}> 
      <p>Create Partner Id</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Father name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mother Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>No. of family Member</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email Id</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Full Address</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Adhaar Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Pan Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>License Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <div style={{ display: "flex", justifyContent: "space-between"  , gap : '40px'}}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Adhaar Card</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pan Card</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2%",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ID</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Bank Details</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2%",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Light Bill</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>KYC</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </div>

          <Button variant="outline-success">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default HOC(GenerateId);
