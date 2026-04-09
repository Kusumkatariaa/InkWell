import React from 'react'
import { Calendar, Pencil, Trash } from "lucide-react";
import { NavLink } from 'react-router';

const BlogCard = () => {
  return (
    <div className='border border-[#38383875] p-6 rounded-xl flex flex-col bg-[#0a0e11] mt-8'>
      <div className='flex items-center gap-2 mb-4'>
        <div className='w-full flex flex-col gap-2 justify-between'>
          <h3 className='text-lg font-bold text-gray-200'>John Doe</h3>
          <p className='text-md text-white p-2 px-0'>Software Engineer</p>
          <div className='flex items-center justify-between '>
            <div className='text-md text-white flex items-center gap-3'><Calendar size={20} /> 2024-06-01</div>
            <div className='flex items-center gap-3'>
              <NavLink to="/edit">
                <button className='text-md text-amber-50 flex items-center gap-2'><Pencil size={20} />
                </button>
              </NavLink>
              <button className='text-md text-amber-50 flex items-center gap-2'><Trash size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard