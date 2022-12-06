/** @format */

import React, { useEffect } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const land = [
  {
    address: "Delhi",
    size: 450,
    price: 50000,
  },
  {
    address: "South",
    size: 323,
    price: 123213,
  },
  {
    address: "North",
    size: 4587,
    price: 4545000,
  },
  {
    address: "Tamil",
    size: 100,
    price: 50000000,
  },
];

const Inventory = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setE] = useState(false);
  const [id, setID] = useState("");

  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://mysterious-journey-56967.herokuapp.com/api/v1/land",
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
  };

  useEffect(() => {
    fetchData();
  }, [axios, token, setData]);

  function MyVerticallyCenteredModal(props) {
    const [image, setI] = useState("");
    const [size, setS] = useState("");
    const [address, setA] = useState("");
    const [price, setP] = useState("");

    const fd = new FormData();
    fd.append("image", image);
    fd.append("size", size);
    fd.append("place", address);
    fd.append("price", price);

    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.post(
          "https://mysterious-journey-56967.herokuapp.com/api/v1/land",
          fd,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setModalShow(false);
        toast.success("Land addded successfully");
        fetchData();
      } catch (err) {
        console.log(err);
      }
    };

    const editHandler = async (e) => {
      e.preventDefault();

      try {
        const data = await axios.put(
          `https://mysterious-journey-56967.herokuapp.com/api/v1/land/${id}`,
          { size, price },

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Land Edited successfully");
        setModalShow(false);
        fetchData();
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            {edit ? "Edit Land" : "Add Land"}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? editHandler : submitHandler}>
            {edit ? (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Size</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    onChange={(e) => setS(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    onChange={(e) => setP(e.target.value)}
                  />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="delhi"
                    onChange={(e) => setA(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Name"
                    onChange={(e) => setI(e.target.files[0])}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Size</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    onChange={(e) => setS(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    onChange={(e) => setP(e.target.value)}
                  />
                </Form.Group>
              </>
            )}

            <br />

            <Button variant="outline-success" type="submit">
              {" "}
              {edit ? "Edit" : "Add"}{" "}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteLand = async (id) => {
    try {
      const data = await axios.delete(
        `https://mysterious-journey-56967.herokuapp.com/api/v1/land/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Land deleted successfully ");
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
            All Lands
          </span>
          <Button
            variant="success"
            onClick={() => {
              setE(false);
              setModalShow(true);
            }}
          >
            Add Land
          </Button>
        </div>
      </section>

      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "2%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Address</th>
            <th>Size</th>
            <th>Price.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.Data?.map((i, index) => (
            <tr key={index}>
              <td>
                <img
                  src={
                    i.image
                      ? ``  i.image
                      : "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202206/rice-fields-g83d1e5e51_1280-sixteen_nine.jpg?size=948:533"
                  }
                  // src=""
                  className="img-thumbnail"
                  alt=""
                />
              </td>
              <td> {i.place} </td>
              <td> {i.size} sqm </td>

              <td> ₹{i.price} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <AiOutlineEdit
                    color="blue"
                    cursor="pointer"
                    onClick={() => {
                      setID(i._id);
                      setE(true);
                      setModalShow(true);
                    }}
                  />
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() => deleteLand(i._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Inventory);
