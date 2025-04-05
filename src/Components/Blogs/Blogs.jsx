import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
const Blogs = ({handleBookmarked, handleMarkAsButton}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{

        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    // console.log(blogs);
    return (
        <div>
            <h1 className='text-3xl'>Blogs: {blogs.length}</h1>
            <div className="all-blogs grid grid-cols-2 mt-5 gap-4">
                {
                    blogs.map(blog => <Blog 
                        key={blog.id} 
                        blog = {blog} 
                        handleBookmarked={handleBookmarked}
                        handleMarkAsButton={handleMarkAsButton}> 
                        </Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;