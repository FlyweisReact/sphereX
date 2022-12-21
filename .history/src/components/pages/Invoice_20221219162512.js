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
                <option>Change Status</option>
                <option>Ongoing</option>
                <option>Successfull</option>
                </Form.Select>
                <br />
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
        </div>

        <Container style={{ overflowX: "auto" , marginTop : '2%' }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Customer</th>
                <th>invoice NUmber</th>
                <th>No. of labours nedded</th>
                <th>Status</th>
                <th>Assign</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              
              </tr>
              <tr>
            
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};
export default HOC(Invoice)