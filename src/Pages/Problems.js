import React from 'react'
import Table from '../components/Table/Table'

const Problems = () => {
  return (
      <div className="w-11/12 md:w-8/12 mx-auto my-10 md:shadow-2xl rounded-2xl overflow-hidden border border-gray-600">
          <div className="w-full bg-neutral py-3">
              
          <h1 className='text-2xl font-bold text-center '>Problems</h1>
          </div>
      <Table />
    </div>
  );
}

export default Problems