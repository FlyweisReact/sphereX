/** @format */

import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Container,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
import HOC from "../../layout/HOC";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const Events = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [id, setId] = React.useState("");
  const [edit, setEdit] = React.useState(false);
  const token = localStorage.getItem("token");

  // All Terms
  const fetchData = React.useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://mysterious-journey-56967.herokuapp.com/api/v1/event/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Add Terms

  function MyVerticallyCenteredModal(props) {
    const [name, setN] = useState("");
    const [desc, setDes] = useState("");
    const [date, setDate] = useState("");

    const submitHandler = async (e) => {
      e.preventDefault();
      const fd = {
        name,
        desc,
        date,
      };
      try {
        const {data} = await axios.post(
          "https://mysterious-journey-56967.herokuapp.com/api/v1/event",
          fd,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(data.message);
        setModalShow(false);
        fetchData();
      } catch (err) {
        console.log(err);
      }
    };

    const editHandler = async (e) => {
      e.preventDefault();
      const fd = {
        name,
        desc,
        date,
      };
      try {
        const {data} = await axios.put(
          `https://mysterious-journey-56967.herokuapp.com/api/v1/event/${id}`,
          fd,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(data.message);
        setModalShow(false);
        fetchData();
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
            {edit ? "Edit Help&Support " : " Add Event "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
            onSubmit={edit ? editHandler : submitHandler}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setN(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <textarea
                style={{
                  color: "black",
                  border: "1px solid black",
                  outline: "none",
                  width: "100%",
                  borderRadius: "5px",
                  padding: "10px",
                }}
                placeholder="Description"
                onChange={(e) => setDes(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteHelp = async (id) => {
    try {
      const {data} = await axios.delete(
        `https://mysterious-journey-56967.herokuapp.com/api/v1/event/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(data.message);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Events
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            Add Events
          </Button>
        </div>
      </section>

      <Container style={{ marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th> Date </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {data?.Data?.map((i, index) => (
              <tr key={index}>
                <td>{i.eventname}</td>
                <td>{i.eventDesc}</td>
                <td>{i.eventdate?.slice(0, 10)}</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <AiFillDelete
                    color="red"
                    cursor={"pointer"}
                    onClick={() => deleteHelp(i._id)}
                  />
                  <AiFillEdit
                    color="blue"
                    cursor={"pointer"}
                    onClick={() => {
                      setId(i._id);
                      setEdit(true);
                      setModalShow(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default HOC(Events);
