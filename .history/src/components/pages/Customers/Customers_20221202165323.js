/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";

const Customers = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const fetchdata = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://mysterious-journey-56967.herokuapp.com/api/v1/allusers",
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

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  const deleteData = async (id) => {
    try {
      const {data} = await axios.delete(
        `https://mysterious-journey-56967.herokuapp.com/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(data.message);
      fetchdata();
    } catch (err) {
      console.log(err);
      
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users
          </span>
        </div>
      </section>
      <Container>
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
              <th>Name</th>
              <th> Email </th>
              <th> Refer Status </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.Users?.map((i , index) => (
              <tr key={index}>
                <td> {i.username} </td>
                <td> {i.email} </td>
                <td> {i.referStatus} </td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <AiFillDelete
                      color="red"
                      cursor="pointer"
                      onClick={() => deleteData(i._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default HOC(Customers);
