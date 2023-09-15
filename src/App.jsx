import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmark from "./components/Bookmarks/Bookmark"
import Header from "./components/Header/Header"


function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // Removing item from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id !==id);
    setBookmarks(remainingBookmarks);

  }

  const handleAddToBookmarks = blog =>{
    const newBookmarks =[...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
      <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmark readingTime={readingTime} bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  )
}

export default App
