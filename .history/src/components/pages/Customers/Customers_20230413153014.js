/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [search, setNewSearch] = React.useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? data?.customer
    : data?.customer?.filter((person) =>
        person?.customerId?.toLowerCase().includes(search.toLowerCase())
      );

  // FetchData
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://n6chil41tk.execute-api.ap-south-1.amazonaws.com/dev/admingetallcustomer"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function MyVerticallyCenteredModal(props) {
    const [customerId, setCustomerId] = useState("");

    const AddCustomerId = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          `https://n6chil41tk.execute-api.ap-south-1.amazonaws.com/dev/admin/ID/${id}`,
          { customerId }
        );
        console.log(data);
        toast.success("Customer Id Created");
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
            Create Customer ID
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={AddCustomerId}>
              <Form.Group>
                <Form.Label>Customer ID</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setCustomerId(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const data = await axios.delete(
        `https://n6chil41tk.execute-api.ap-south-1.amazonaws.com/dev/admin/cuestomer/${id}`
      );
      console.log(data);
      toast.success("Customer Deleted");
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
            All Customers
          </span>
        </div>
      </section>

      <div
        style={{
          overflowX: "auto",
        }}
      >
        <input
          type="search"
          style={{
            border: "1px solid black",
            outline: "none",
            width: "300px",
            padding: "10px",
            borderRadius: "0px",
            float: "right",
            marginRight: "10px",
            marginBottom: "20px",
            color: "black",
          }}
          placeholder="Search by CustomerId"
          value={search}
          onChange={handleSearchChange}
        />
        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "2%",
          }}
        >
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>Name</th>
              <th> Phone Number </th>
              <th>Email </th>
              <th>Location </th>
              <th>Shop Name </th>
              <th>GST No. </th>
              <th>Transactions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered?.map((i, index) => (
              <tr key={index}>
                <td>
                  {" "}
                  {i.customerId ? (
                    i.customerId
                  ) : (
                    <Button
                      variant="outline-success"
                      onClick={() => {
                        setId(i._id);
                        setModalShow(true);
                      }}
                    >
                      Create{" "}
                    </Button>
                  )}{" "}
                </td>
                <td> {i.fullname} </td>
                <td> {i.mobilenumber} </td>
                <td> {i.emailid} </td>
                <td> {i.livelocation} </td>
                <td> {i.shopname} </td>
                <td> {i.gstnumber} </td>
                <td>
                  {" "}
                  <Button
                    style={{ borderRadius: "0px" }}
                    onClick={() => navigate(`/trans/${i._id}`)}
                  >
                    View
                  </Button>{" "}
                </td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <AiFillDelete
                      color="red"
                      cursor="pointer"
                      onClick={() => deleteHandler(i._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Customers);
