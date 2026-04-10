import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const Edit = ({ handleUpdate }) => {
  let {id} = useParams();
  let  {blogs} = useContext(BlogContext);

  let editBlog = blogs.find(blog => blog.id === id);

  if(!editBlog) {
    return <div>Blog not found</div>
  }

  return (
    <BlogForm editBlog={editBlog} />
  )
}

export default Edit