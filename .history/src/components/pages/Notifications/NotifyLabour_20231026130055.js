/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";
const NotifyLabour = () => {
  const [data, setData] = useState([]);
  const [labourId, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setL] = useState("");

  const fetchLabour = async () => {
    try {
      const { data } = await axios.get(
        "https://haroon-sphere-labour-bakend.vercel.app/admingetalllabour"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLabour();
  }, []);

  const postHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://haroon-sphere-labour-bakend.vercel.app/admin/labourtask",
        {
          labourId,
          desc,
          location,
        }
      );
      console.log(data);
      toast.success("Notification Sended");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Assign Task to Partner
          </span>
        </div>
      </section>

      <Container className="formD">
        <p>Assign task to Partner</p>
        <Form onSubmit={postHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Select Active Partner</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setId(e.target.value)}
            >
              <option>--Select--</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Form.Group>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Describe Work"
            className="mb-3"
            onChange={(e) => setDesc(e.target.value)}
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>

          <Button variant="outline-success" type="submit">
            Assign task
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default HOC(NotifyLabour);
