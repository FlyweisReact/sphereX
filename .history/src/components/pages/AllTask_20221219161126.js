import React from 'react'
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
        
      </section>

   </>
  )
}

export default HOC(AllTask)