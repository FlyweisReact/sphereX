/** @format */

import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Terms = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/terms"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [terms, setT] = useState("");

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          "https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/terms/63b688de0a9f6910651c0c0b",
          {
            terms,
          }
        );
        console.log(data);
        setModalShow(false);
        toast.success("Terms Updated");
        fetchHandler();
      } catch (err) {
        console.log(err);
      }
    };
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
            onSubmit={putHandler}
          >
            <FloatingLabel
              controlId="floatingTextarea"
              label="Terms&Condition"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                onChange={(e) => setT(e.target.value)}
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
                    setModalShow(true);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
    </>
  );
};

export default HOC(Terms);
