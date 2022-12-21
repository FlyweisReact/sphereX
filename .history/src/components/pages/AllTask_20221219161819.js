/** @format */

import React from "react";
import { Button, Container, Table ,Modal } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import HOC from "../layout/HOC";

const AllTask = () => {
    const navigate = useNavigate()


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
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Tasks
          </span>
        </div>

        <Container style={{ overflowX: "auto" , marginTop : '2%' }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Task</th>
                <th>No. of labours nedded</th>
                <th>Status</th>
                <th>Assign</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customer1</td>
                <td style={{width : '300px'}}>
                  ambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the releas
                </td>
                <th>5</th>
                <th>Ongoing</th>
                <th><Button variant='outline-success' onClick={() => navigate('/Notice/Labour')}>Assign to Partner</Button> </th>
                <th><AiFillEdit color='blue' cursor={'pointer'} /> </th>
              </tr>
              <tr>
                <td>Customer1</td>
                <td  style={{width : '300px'}}>
                  ambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the releas
                </td>
                <th>5</th>
                <th>Ongoing</th>
                <th><Button variant='outline-success' onClick={() => navigate('/Notice/Labour')}>Assign to Partner</Button> </th>
                <th><AiFillEdit color='blue' cursor={'pointer'} /> </th>
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};

export default HOC(AllTask);
