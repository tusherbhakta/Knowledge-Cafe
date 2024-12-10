import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'
import Bookmark from './component/Bookmark/Bookmark'


function App() {
  const [bookmarks, setBookmarks]= useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = (time,id) =>{
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }
  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-6 max-w-7xl mx-auto mt-8'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}

export default App
