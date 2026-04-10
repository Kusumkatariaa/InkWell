import React, { useContext } from 'react'
import BlogCard from './BlogCard'
import { BlogContext } from '../context/BlogContext';

const BlogList = () => {
  let { blogs } = useContext(BlogContext);
  return (

    <div className='grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-8 px-5 md:px-54'>
      {blogs.map((blog) => {
        return <BlogCard key={blog.id} blog={blog} />;
      })}
    </div>
  )
}

export default BlogList