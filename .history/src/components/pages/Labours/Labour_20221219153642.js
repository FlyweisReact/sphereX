/** @format */

import React , {useState} from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";


const Labour = () => {

  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
  ? users
  : users.filter((id) =>
     id.LId
    );

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Labours
          </span>
        </div>
      </section>

      <input
        type="search"
        style={{
          border: "1px solid black",
          outline: "none",
          width: "30%",
          padding: "10px",
          borderRadius: "10px",
          float: "right",
          marginBottom: "3%",
          color : 'black'

        }}
        placeholder='Search by LabourId'
        value={search} onChange={handleSearchChange}
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
            <th>LabourId</th>
            <th> Phone Number </th>
            <th> Address </th>
            <th> Type of Work </th>
            <th> Status </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((i, index) => (
            <tr key={index}>
              <td> {i.name} </td>
              <td> {i.LId} </td>
              <td> {i.phone} </td>
              <td> {i.Location} </td>
              <td> {i.workDescription} </td>
              <td> {i.status} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() => toast.success("Labour Deleted SuccessFully")}
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