import React, { useContext } from 'react'
import BlogList from '../components/BlogList'
import { BlogContext } from '../context/BlogContext';

const Home = () => {
  let { blogs } = useContext(BlogContext);

  return (
    <div>
      <section className="mb-12 text-center pt-12">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to <span className="text-primary text-[#008c75]">Inkwell</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-[#8f8f8f]">Discover thoughtful articles on technology, programming, and software engineering from passionate writers.</p>
      </section>

      {blogs.length === 0 ? (
        <div>
          <h1 className='pt-30 text-center'>No Blogs Available...</h1>
        </div>
      ) : (
        <BlogList />
      )}
    </div>
  )
}

export default Home