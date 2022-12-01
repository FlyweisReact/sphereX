
import React from 'react'
import HOC from '../../layout/HOC'

const addTLT = () => {
  return (
    <>
          <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All TLT's
          </span>
        </div>
      </section>
    </>
  )
}

export default HOC(addTLT)