import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button  , Modal , Form , FloatingLabel} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";



const land = [
   {
    address : 'Delhi' , 
    size : 450 , 
    price : 50000 
   },
   {
    address : 'South' , 
    size : 323 , 
    price : 123213 
   },
   {
    address : 'North' , 
    size : 4587 , 
    price : 4545000 
   },
   {
    address : 'Tamil' , 
    size : 100 , 
    price : 50000000
   },
]


const Inventory = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setE] = useState(false);

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
            {" "}
            {edit ? "Edit Subscription" : "Add Subscription"}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {edit ? (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Size</Form.Label>
                  <Form.Control type="number"  min={1} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>TLT</Form.Label>
                  <Form.Control type="number" min={1} />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" placeholder="Name" />
                </Form.Group>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Description"
                  className="mb-3"
                >
                  <Form.Control as="textarea" style={{ outline: "none" }} />
                </FloatingLabel>
              </>
            )}
            <br />

            <Button variant="outline-success"> {edit ? "Edit" : "Add"} </Button>
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
            All Lands
          </span>
        </div>
      </section>

      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "5%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Address</th>
            <th>Size</th>
            <th>Price.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

        {land.map((i , index) => (
          <tr key={index}>
              <td> {i.address}  </td>
              <td> {i.size} sqm  </td>
         
              <td> ₹{i?.price}  </td>
              <td>
              <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <AiOutlineEdit
                    color="blue"
                    cursor="pointer"
                    onClick={() => {
                      setE(true);
                      setModalShow(true);
                    }}
                  />
                  <AiFillDelete color="red" cursor="pointer" />
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
