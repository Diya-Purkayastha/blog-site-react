import { CiLineHeight } from 'react-icons/ci'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'

function App() {
const[Bookmarked , setBookmarked] = useState([])
const[readingCount , setReadingCount] = useState(0)

 const handleBookmarked = (blog) =>{
    // console.log(blog);
    
      setBookmarked([...Bookmarked , blog])
    
    
 } 
 

 const handleMarkAsButton = (time, id) =>{
    setReadingCount(readingCount + time);
    handleRemoveFromBookmark(id)

 }

 const handleRemoveFromBookmark = (id) =>{
  const remainingBookmark = Bookmarked.filter(mark => mark.id !== id)
  setBookmarked(remainingBookmark)
 }


  return (
    <>
      <Navbar> </Navbar>
      

      <div className="main-container flex flex-col md:flex-row text-center my-4 gap-5 p-5">
        <div className="left-container md:w-[70%] ">
          
          <Blogs handleBookmarked={handleBookmarked} handleMarkAsButton={handleMarkAsButton} ></Blogs>
        </div>
        <div className="right-container md:w-[30%] p-2 bg-stone-100">
          <h1 className='font-semibold'>Reading time: {readingCount} </h1>
          <h1 className='mb-3 font-semibold'>Bookmarked Count:{Bookmarked.length} </h1>
          {
            Bookmarked.map(marked => <p key={marked.id} className='bg-teal-100 p-2 shadow text-center font-semibold mt-3' >{marked.title}</p> )
          }
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
