import React from 'react'
import { Container, Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const AllTask = () => {
  return (
   <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Tasks
          </span>
        </div>

        <Container style={{overflowX : 'auto'}} >
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Task</th>
                    <th>No. of labours neded</th>
                </tr>
            </thead>

            </Table>
        </Container>
      </section>

   </>
  )
}

export default HOC(AllTask)