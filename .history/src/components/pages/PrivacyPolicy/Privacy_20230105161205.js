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

const Privacy = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4001/policy"
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

    const [ privacy , setP] = useState('')

    const putHandler = async (e) =>{
      e.preventDefault()
      try{
         const data = await axios.put('http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4001/policy/63aaa9ca8b8072204c0ac6bb' ,{
          privacy
         })
         console.log(data)
         toast.success('Privacy Updated')
         fetchHandler()
         setModalShow(false)
      }catch(err){
        console.log(err)
      }
    }


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
            onSubmit ={putHandler}
          >
            <FloatingLabel
              controlId="floatingTextarea"
              label="Privacy policy"
              className="mb-3"
            >
              <Form.Control as="textarea"  onChange={(e) => setP(e.target.value)}/>
            </FloatingLabel>

            <Button
              variant="outline-success"
              type="submit"
            >
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
              <td>
               {data?.privacy?.privacy}
              </td>
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
      </Container>
    </>
  );
};

export default HOC(Privacy);
