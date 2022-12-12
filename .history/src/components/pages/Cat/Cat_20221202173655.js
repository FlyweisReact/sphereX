/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Ban = [
  {
    img: "https://images.template.net/wp-content/uploads/2022/05/Banner-Ideas.jpg",
    name: "Banner",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbOr66i--Hhx3JClhr5HHf7vRoqrUclmPZg&usqp=CAU",
    name: "Banner",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGL0V6RT1B6WNquZOzKEkGoE-ANS_PJ6EHj7V2GlWjtnOX9rl37zzrmYHKBhnm5pdBocU&usqp=CAU",
    name: "Banner",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPdiKjm78HSFCj_jqwuLikSQ8OPxuYDckS5X7_29CxdaY4KBuFsD9RI5Fv4H8q4Yfh4Y&usqp=CAU",
    name: "Banner",
  },
  {
    img: "https://nventive.co.ke/wp-content/uploads/2020/04/Nventive-WordPress-Featured-Image-1.png",
    name: "Banner",
  },
];

const Cat = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Banner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Offers
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add-Offer
          </Button>
        </div>
      </section>

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {Ban.map((i , index) => {
          return (
            <>
              <div className="card-container" key={index}>
                <div className="card">
                  <div className="card-body">
                    <img
                      src={i.img}
                      alt=""
                      style={{ width: "100%", height: "200px" }}
                    />

                    <div
                      style={{
                        marginTop: "2%",
                      }}
                    >
                      <Button
                        variant="outline-danger"
                        style={{ width: "100%" }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Cat);
