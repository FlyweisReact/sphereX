
import React from 'react'
import HOC from '../../layout/HOC'
import {Container , Form ,Button } from 'react-bootstrap'

const addTLT = () => {
  return (
    <>
          <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Add TLT Value
          </span>
        </div>
      </section>

      <Container style={{width : '800px' , marginTop : '2%' , color : 'black'}}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>TLT</Form.Label>
        <Form.Control type="number" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="outline-success" type="submit">
        Submit
      </Button>
    </Form>
      </Container>
    </>
  )
}

export default HOC(addTLT)