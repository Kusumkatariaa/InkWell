import { createContext, useEffect, useState } from "react";
export let BlogContext = createContext();

export let ContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState(() => {
        const storedBlogs = localStorage.getItem("blogs");
        return storedBlogs ? JSON.parse(storedBlogs) : [];
    });

    // console.log(blogs);
    let handleDelete = (id) => {
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
        // console.log(id);
    }
    let handleUpdate = (updatedBlog) => {
        setBlogs(prevBlogs =>
            prevBlogs.map(blog =>
                blog.id === updatedBlog.id ? updatedBlog : blog
            ));
    }
    useEffect(() => {
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }, [blogs]);
    return <BlogContext.Provider value={{ blogs, setBlogs, handleDelete, handleUpdate }}>
        {children}
    </BlogContext.Provider>
}