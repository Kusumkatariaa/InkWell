import React, { useState } from 'react'
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='p-5 w-full border-b border-[#74727275] px-5 md:px-54 justify-between flex items-center'>
      <NavLink to="/">
        <div className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#008c75] lucide lucide-pen-line text-(--brand) size-6" aria-hidden="true"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
          Inkwell
        </div>
      </NavLink>
      <NavLink to="/create">
        <button className='bg-[#008c75] rounded-md py-[6px] px-3 cursor-pointer'>
          + New Article
        </button>
      </NavLink>
    </div>
  )
}

export default Navbar