/** @format */

import React from "react";
import { Button, Container, Table ,Modal, Form } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Invoice = () => {
    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Edit Status
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Select aria-label="Default select example"> 
                <option>Customer</option>
                <option>Customer1</option>
                <option>Customer2</option>
                </Form.Select>
                <br />
                <Form.Group>
                    <Form.Label>Invoice Number</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Button variant='outline-success' onClick={() => {
                    setModalShow(false)
                    toast.success('Edit Successfully')
                }}>Submit</Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        );
      }


  return (
    <>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
             Invoice
          </span>
          <Button variant='outline-success' onClick={() => setModalShow(true)} >Create Invoice</Button>
        </div>

        <Container style={{ overflowX: "auto" , marginTop : '2%' }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Customer</th>
                <th>invoice Number</th>
                <th>Description</th>
                <th>Date of issue</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>Customer1</td>
              <td>00001</td>
              <td>Work</td>
              <td>12/02/2022</td>
              <td>Delhi</td>
              <td>₹5000</td>
            
              </tr>
              <tr>
              <td>Customer1</td>
              <td>00001</td>
              <td>Work</td>
              <td>12/02/2022</td>
              <td>Delhi</td>
              <td>₹5000</td>
            
              </tr>
            
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};
export default HOC(Invoice)