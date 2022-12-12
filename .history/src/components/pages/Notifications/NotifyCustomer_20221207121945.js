import React from "react";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";
import HOC from "../../layout/HOC";

const NotifyCustomer = () => {
  return (
  <>
          <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Send Notice to Customer
          </span>
        </div>
      </section>

      <Container
        className="formD"
      >
      <p>Notify Customer Regarding Task</p>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Select Customer</option>
            <option>Labour</option>
            <option>Labour1</option>
            <option>Labour2</option>
          </Form.Select>
          <br />
          <FloatingLabel
            controlId="floatingTextarea"
            label="Describe Work"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <br />

          <Button variant="outline-success">Assign task</Button>
        </Form>
      </Container>
  </>
  )
}

export default HOC(NotifyCustomer)