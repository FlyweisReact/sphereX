/** @format */

import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, FloatingLabel } from "react-bootstrap";
import HOC from "../../layout/HOC";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";

const Terms = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [partnerData, setPartnerData] = useState([]);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "https://haroon-sphere-labour-bakend.vercel.app/terms"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const partnerTerms = async () => {
    try {
      const { data } = await axios.get(
        "https://haroon-sphere-labour-bakend.vercel.app/lanour_terms"
      );
      setPartnerData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchHandler();
    partnerTerms();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [terms, setT] = useState("");

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          "https://haroon-sphere-labour-bakend.vercel.app/terms/63b688de0a9f6910651c0c0b",
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

    const partnerPutHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `https://haroon-sphere-labour-bakend.vercel.app/lanour_terms/63b688de0a9f6910651c0c0b`,
          { terms }
        );
        console.log(data);
        props.onHide();
        alert("Updated");
        partnerTerms();
      } catch (e) {
        console.log(e);
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
            onSubmit={edit ? partnerPutHandler : putHandler}
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
          <span className="tracking-widest text-slate-900 font-semibold">
            Customer's Terms&condition
          </span>
        </div>
      </section>

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
            <td>
              <AiFillEdit
                color="blue"
                cursor={"pointer"}
                onClick={() => {
                  setModalShow(true);
                  setEdit(false);
                }}
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <section style={{ marginTop: "5%" }}>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold">
            Partner's Terms&condition
          </span>
        </div>
      </section>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Terms&Condition</th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{partnerData?.terms?.terms}</td>
            <td>
              <AiFillEdit
                color="blue"
                cursor={"pointer"}
                onClick={() => {
                  setModalShow(true);
                  setEdit(true);
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
