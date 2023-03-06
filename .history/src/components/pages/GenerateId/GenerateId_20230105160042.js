/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const GenerateId = () => {
  const [partnerId, setPartnerId] = useState("");
  const [Name, setName] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [members, setMember] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [adhaarNumber, setAdhaarNumber] = useState("");
  const [pancard, setPancard] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [labourId, setLabourId] = useState("");

  const [data, setData] = useState([]);
  // Cloudinary Images ---

  // Adhaar Card
  const [addharImage, setAI] = useState("");
  const [UrlAadhaar, setUrlAadhaar] = useState("");
  const adhaarUrl = (e) => {
    const data = new FormData();
    data.append("file", addharImage);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dbcnha741");
    fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrlAadhaar(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Pan Card
  const [PanImage, setPI] = useState("");
  const [UrlPan, setUrlPan] = useState("");
  const panUrl = (e) => {
    const data = new FormData();
    data.append("file", PanImage);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dbcnha741");
    fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrlPan(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ID Card
  const [IDImage, setImageID] = useState("");
  const [UrlID, setUrlID] = useState("");
  const IDUrl = (e) => {
    const data = new FormData();
    data.append("file", IDImage);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dbcnha741");
    fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrlID(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Bank Card
  const [BankImage, setBank] = useState("");
  const [BankID, setUrlBank] = useState("");
  const BankUrl = (e) => {
    const data = new FormData();
    data.append("file", BankImage);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dbcnha741");
    fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrlBank(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Light Bill
  const [BillImage, setBillImage] = useState("");
  const [UrlBill, setUrlBill] = useState("");
  const BillUrl = (e) => {
    const data = new FormData();
    data.append("file", BillImage);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dbcnha741");
    fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrlBill(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // KYC
  const [KYCImage, setKYCImage] = useState("");
  const [UrlKYC, setUrlKYC] = useState("");
  const KYCUrl = (e) => {
    const data = new FormData();
    data.append("file", KYCImage);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dbcnha741");
    fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrlKYC(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4001/admin/addlabour",
        {
          partnerId,
          Name,
          father,
          labourId,
          mother,
          members,
          mobile,
          email,
          address,
          adhaarNumber,
          pancard,
          licenseNumber,
          adhaarImage: UrlAadhaar,
          panImage: UrlPan,
          Id: UrlID,
          bankDetails: BankID,
          lightbill: UrlBill,
          kyc: UrlKYC,
        }
      );
      console.log(data);
      toast.success("Partner Id Created");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLabours = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4001/admingetalllabour"
      );
      setData(data);
    } catch (Err) {
      console.log(Err);
    }
  };

  useEffect(() => {
    fetchLabours();
  }, []);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Create Partner Id
          </span>
        </div>
      </section>

      <Container className="formD" style={{ marginBottom: "10%" }}>
        <p>Create Partner Id</p>
        <Form onSubmit={postHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Partner ID</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setPartnerId(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setLabourId(e.target.value)}
            >
              <option>Open this select Labour</option>
              {data?.customer?.map((i, index) => (
                <option key={index} value={i._id}>
                  {" "}
                  {i.fullname}{" "}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Father name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setFather(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mother Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setMother(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>No. of family Member</Form.Label>
            <Form.Control
              type="number"
              min={0}
              onChange={(e) => setMember(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              pattern="[0-9]{10}"
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Full Address</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Adhaar Number</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setAdhaarNumber(e.target.value)}
            />
          </Form.Group>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Adhaar Card</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setAI(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pan Card</Form.Label>
              <Form.Control
                type="file"
                onClick={() => adhaarUrl()}
                onChange={(e) => setPI(e.target.files[0])}
              />
            </Form.Group>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2%",
              gap: "40px",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="file"
                onClick={() => panUrl()}
                onChange={(e) => setImageID(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Bank Details</Form.Label>
              <Form.Control
                type="file"
                onClick={() => IDUrl()}
                onChange={(e) => setBank(e.target.files[0])}
              />
            </Form.Group>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2%",
              gap: "40px",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Light Bill</Form.Label>
              <Form.Control
                type="file"
                onClick={() => BankUrl()}
                onChange={(e) => setBillImage(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>KYC</Form.Label>
              <Form.Control
                type="file"
                onClick={() => BillUrl()}
                onChange={(e) => setKYCImage(e.target.files[0])}
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Pan Number</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setPancard(e.target.value)}
              onClick={() => KYCUrl()}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>License Number</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
          </Form.Group>

          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default HOC(GenerateId);
