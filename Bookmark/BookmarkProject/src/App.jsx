import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import viteLogo from '/vite.svg'
import './App.css'
import BookMarkHome from './components/BookmarkHome/BookMarkHome'
import BookmarkDetails from './components/BookmarkHome/BookmarkDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    //   <BookMarkHome></BookMarkHome>
    // </>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BookMarkHome />}>
        <Route path="/:title" element={<BookmarkDetails />} />
      </Route>
        {/* <Route path="/backon" element={<BookmarkDetails />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
