/** @format */

import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import HOC from "../layout/HOC";

const AllTask = () => {
    const navigate = useNavigate()
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Tasks
          </span>
        </div>

        <Container style={{ overflowX: "auto" , marginTop : '2%' }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Task</th>
                <th>No. of labours nedded</th>
                <th>Status</th>
                <th>Assign</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customer1</td>
                <th>
                  ambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the releas
                </th>
                <th>5</th>
                <th>Ongoing</th>
                <th><Button variant='outline-success'>Assign to Parnter</Button> </th>
                <th><AiFillEdit color='blue' cursor={'pointer'} /> </th>
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};

export default HOC(AllTask);
