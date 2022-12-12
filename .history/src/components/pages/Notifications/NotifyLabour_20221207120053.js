/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import HOC from "../../layout/HOC";

const NotifyLabour = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Customers
          </span>
        </div>
      </section>

      <Container style={{width : '800px'}} >
        
      </Container>
    </>
  );
};

export default HOC(NotifyLabour);
