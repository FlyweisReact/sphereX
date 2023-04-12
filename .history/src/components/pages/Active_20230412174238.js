import React, { useEffect } from 'react'
import HOC from '../layout/HOC'
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Active = () => {  
    const [search, setNewSearch] = useState("");
    const[ data , setData ] = useState([])

    const fetchData = async () => {
      try {
          const { data } = await axios.get("https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/active")
      (data)
      }catch(e) {
        console.log(e)
      }
    }

    useEffect(() => {
      fetchData()
    },[])
  
    const handleSearchChange = (e) => {
      setNewSearch(e.target.value);
    };
  
    const filtered = !search
      ? data
      : data?.filter((person) =>
          person?.LabourId?.toLowerCase().includes(search.toLowerCase())
        );
  

  
    return (
      <>
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              All Active Partner
            </span>
          </div>
        </section>
  
        <input
          type="search"
          style={{
            border: "1px solid black",
            outline: "none",
            width: "300px",
            padding: "5px",
            borderRadius: "0px",
            float: "right",
            color: "black",
            marginBottom : '20px'
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
              <th> Assign Task </th>
            </tr>
          </thead>
          <tbody>
            {filtered?.map((i, index) => (
              <tr key={index}>
                <td> {i.name} </td>
                <td> {i.LabourId} </td>
                <td> {i.number} </td>
                <td> {i.address} </td>
                <td> {i.active} </td>
                <td>
                <Button variant='outline-success' >Assign</Button>
                 </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  };

export default HOC(Active)