/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const NotifyCustomer = () => {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
  const [desc, setDesc] = useState("");
  const [NoLabour, setNo] = useState("");

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/admingetallcustomer"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const postHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/notify/",
        {
          userId,
          desc,
          NoLabour,
        }
      );
      console.log(data);
      toast.success("Notification Send Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Push Notification
          </span>
        </div>
      </section>

      <Container className="formD">
        <Form onSubmit={postHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Select Customer or Partner</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setUserId(e.target.value)}
            >
              <option>--Select--</option>
              {data?.customer?.map((i, index) => (
                <option key={index} value={i._id}>
                  {" "}
                  {i.customerId}{" "}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Description"
            className="mb-3"
            onChange={(e) => setDesc(e.target.value)}
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>

          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default HOC(NotifyCustomer);
