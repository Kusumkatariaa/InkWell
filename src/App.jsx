import React from 'react'
import Navbar from './components/Navbar'
import BlogForm from './components/BlogForm'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import { Edit } from 'lucide-react'

const App = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<BlogForm />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App