/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Labour = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);

  //fetchData
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4001/admingetalllabour"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? data?.customer
    : data?.customer?.filter((person) =>
        person?.LId?.toLowerCase().includes(search.toLowerCase())
      );


      const deleteHandler = async (id) => {
        try{
          const data = await axios.delete(`http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4001/admin/labour/${id}`)
          console.log(data)
          toast.success('Lobour Deleted')
          fetchData()
        }catch(err){
          console.log(err)
        }
      }

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Partner's
          </span>
        </div>
      </section>

      <input
        type="search"
        style={{
          border: "1px solid black",
          outline: "none",
          width: "300px",
          padding: "10px",
          borderRadius: "0px",
          marginRight : '10px',
          float: "right",
          marginBottom: "20px",
          color: "black",
        }}
        placeholder="Search by PartnerId"
        value={search}
        onChange={handleSearchChange}
      />

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
            <th>Name</th>
            <th>PartnerId</th>
            <th> Phone Number </th>
            <th> Address </th>
            <th> Type of Work </th>
            <th>Transactions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered?.map((i, index) => (
            <tr key={index}>
              <td> {i.fullname} </td>
              <td> {i.patnerId} </td>
              <td> {i.mobilenumber} </td>
              <td> {i.addresstype} </td>
              <td> {i.typesofwork} </td>
              <td> <Button style={{borderRadius : '0px'}} onClick={() => navigate(`/lab/${i._id}`)} >View</Button>  </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() => deleteHandler(i._id)}
                  />
                  <AiFillEye
                    color="blue"
                    cursor="pointer"
                    onClick={() => navigate(`/location/${i._id}`)}
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

export default HOC(Labour);
