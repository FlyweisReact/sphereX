
import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

const users = [
  {
    name: "React",
    TLT: 23,

  },
  {
    name: "Nodejs",
    TLT: 12,

  },
  {
    name: "Java",
    TLT: 1234568790,

  },
  {
    name: "Python",
    TLT: 1234568790,

  },
];


const Tlt = () => {
    return (
        <>
          <section>
            <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
              <span className="tracking-widest text-slate-900 font-semibold uppercase ">
                All TLT's 
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
                <th>User</th>
                <th>TLT </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((i) => (
                <tr>
                  <td> {i.name} </td>
                  <td> {i.Role} </td>
                  <td>
                    <div
                      style={{ display: "flex", gap : '10px' }}
                    >
                      {" "}
                    <AiOutlineEdit color="blue" cursor="pointer" />
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

export default HOC(Tlt)