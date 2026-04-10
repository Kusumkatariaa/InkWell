import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { BlogContext } from '../context/BlogContext';
import { nanoid } from 'nanoid';

const BlogForm = ({ editBlog }) => {
  let { setBlogs, handleUpdate } = useContext(BlogContext);

  let {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: "onChange",
    defaultValues: editBlog,
  });
  let navigate = useNavigate();
  let handleFormSubmit = (data) => {
    if (editBlog) {
      handleUpdate({ ...editBlog, ...data });
    } else {
      setBlogs(prevBlogs => [...prevBlogs, {
        ...data,
        id: nanoid(),
        createdAt: new Date().toISOString()
      }]);
    }
    reset();
    navigate("/");
  }



  return (
    <div className='w-[88%] md:w-[58%] mx-auto pt-20'>
      <NavLink to="/">
        <div className='flex  mb-4 pb-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-arrow-left mr-2 h-4 w-4" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          <h4 className='text-gray-200 text-sm'>Back to Dashboard</h4>
        </div>
      </NavLink>
      <div className='border border-[#38383875] p-6 rounded-xl flex flex-col bg-[#0a0e11]'>
        <h1 className='pb-5 text-l font-bold'>Create New Article</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <label className='text-md font-semibold text-amber-50'>Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className='bg-[#25292e57] border border-[#38383875] rounded-md py-2 px-3 focus:outline-none' type="text" id="title" placeholder='Title' />
          </div>
          {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
          <div className='flex flex-col gap-2'>
            <label className='text-md font-semibold text-amber-50'>Content</label>
            <textarea
              {...register("content", { required: "Content is required" })}
              className=' bg-[#25292e57] border border-[#38383875] w-full h-30 rounded-md py-2 px-3 focus:outline-none transition-all' id="content" placeholder='Content'></textarea>
          </div>

          {errors.content && <p className='text-red-500'>{errors.content.message}</p>}

          <button disabled={editBlog ? false : !isValid} type='submit' className={` ${editBlog ? "disabled:opacity-100 disabled:cursor-allowed" : "disabled:opacity-50 disabled:cursor-not-allowed"} bg-[#008c75] rounded-md py-2 w-[100px] cursor-pointer`}>
            {editBlog ? "Update" : "Publish"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default BlogForm