/** @format */

import axios from "axios";
import React from "react";
import {
  Button,
  Container,
  Table,
  Modal,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import HOC from "../../layout/HOC";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const Privacy = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Privacy Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
          >
            <FloatingLabel
              controlId="floatingTextarea"
              label="Privacy policy"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
              />
            </FloatingLabel>

            <Button variant="outline-success" onClick={() => toast.success('Privacy Policy Edited')}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
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
            All Privacy Policy
          </span>
        </div>
      </section>

      <Container style={{ marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Privacy Policy</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data?.privacy?.privacy}</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <AiFillEdit
                  color="blue"
                  cursor={"pointer"}
                  onClick={() => {
                    setId(data?.privacy?._id);

                    setModalShow(true);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default HOC(Privacy);
