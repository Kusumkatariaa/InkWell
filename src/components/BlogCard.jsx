import React, { useContext } from 'react'
import { Calendar, Pencil, Trash } from "lucide-react";
import { NavLink } from 'react-router';
import { BlogContext } from '../context/BlogContext';

const BlogCard = ({ blog }) => {
  let { handleDelete } = useContext(BlogContext);

  return (
    <div className='border border-[#38383875] p-6 rounded-xl flex flex-col bg-[#0a0e11] mt-8'>
      <div className='flex items-center gap-2 mb-4'>
        <div className='w-full flex flex-col gap-8 justify-between'>
          <h3 className='text-lg font-bold text-gray-200'>{blog.title}</h3>
          <p className='text-md text-white p-2 px-0'>{blog.content}</p>
          <div className='flex items-center justify-between '>
            <div className='text-md text-white flex items-center gap-3'><Calendar size={20} /> Apr 10, 2026</div>
            <div className='flex items-center gap-3'>
              <NavLink to={`/edit/${blog.id}`}>
                <button className='text-md text-amber-50 flex items-center gap-2'><Pencil size={20} />
                </button>
              </NavLink>
              <button
                onClick={() => handleDelete(blog.id)}
                className='text-md text-amber-50 flex items-center gap-2'><Trash size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard