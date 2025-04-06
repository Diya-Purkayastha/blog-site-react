import React, { useState } from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmarked, handleMarkAsButton}) => {
    const [activeId , setActiveId] = useState([]);
    const handleClick = () =>{
        handleMarkAsButton(blog.reading_time , blog.id);
        setActiveId(blog.id)
    }


    return (
        <div className='' >
            <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                src={blog.cover}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="author flex justify-between items-center">
                    <h3>{blog.author}</h3>
                    <img className='rounded-full w-16 ' src={blog.author_img} alt="" />
                    <button onClick={()=> handleBookmarked(blog)} ><FaBookmark size={25} /></button>
                </div>
                <h2 className="card-title">{blog.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
               <div className="flex">
               {
                    blog.hashtags.map(hashtag => <button key={hashtag} className='btn '>{hashtag}</button> )
                }
               </div>
                <div className="card-actions justify-end">
                <button onClick={handleClick } className={`btn ${activeId === blog.id ? "btn-disable" : 'btn-primary'}`}>Mark as read</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;