import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog=> <Blog key={blog.id} handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks} blog={blog} ></Blog>)
            }
        </div>
    );
};

export default Blogs;