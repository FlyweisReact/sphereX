/** @format */

import axios from "axios";
import React, { useState } from "react";
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

const Terms = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [id, setID] = useState("");

  // All Terms
  const fetchData = React.useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://mysterious-journey-56967.herokuapp.com/api/v1/terms"
      );
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Add Terms

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
            Edit Terms&Condition
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
            onSubmit={editHandler}
          >
            <FloatingLabel
              controlId="floatingTextarea"
              label="Terms&Condition"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                onChange={(e) => setTerm(e.target.value)}
              />
            </FloatingLabel>

            <Button variant="outline-success" type="submit">
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
            All Terms&condition
          </span>
        </div>
      </section>

      <Container style={{ marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Terms&Condition</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data?.terms?.terms}</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <AiFillEdit
                  color="blue"
                  cursor={"pointer"}
                  onClick={() => {
                    setID(data?.terms?._id);
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

export default HOC(Terms);
