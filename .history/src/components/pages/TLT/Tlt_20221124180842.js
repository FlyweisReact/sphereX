import React from 'react'
import HOC from '../../layout/HOC'

const Tlt = () => {
    return (
        <>
          <section>
            <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
              <span className="tracking-widest text-slate-900 font-semibold uppercase ">
                All Users 
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
                <th>Name</th>
                <th>Phone </th>
                <th> Email </th>
                <th> Role </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((i) => (
                <tr>
                  <td> {i.name} </td>
                  <td> {i.phone} </td>
                  <td> {i.email} </td>
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