import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-6 mx-3'>
      <h2 className='bg-gray-300 text-black font-semibold h-15 w-28 flex items-center justify-center rounded-2xl text-2xl '>CodeVita</h2>
      <button className='bg-black text-white font-light h-20 w-40 flex items-center justify-center rounded-2xl text-xl '>Digital Parameters</button>
    </div>
  )
}

export default Navbar
