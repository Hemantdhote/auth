import React from 'react'

const Dashboard = () => {
  return (
    <div>
       <div className='flex flex-col items-center justify-center h-screen w-full gap-2'>
        <h2 className='text-2xl font-bold text-green-700'>HEY HEMANT WELCOME</h2>
        <h4 className='text-md'>hemant123@gmail.com</h4>
        <button className='px-8 py-2 text-white rounded-md bg-red-500 mt-4' >Logout</button>
      </div>
      
    </div>
  )
}

export default Dashboard
