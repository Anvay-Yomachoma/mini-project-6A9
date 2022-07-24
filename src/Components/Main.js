import React from 'react'
import Search from './Search/Search'
import FacultyLogin from './Login/FacultyLogin'
import Upload from './Upload/Upload'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Main() {
  return (
    <div className="main">
    <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/facultylogin" element={<FacultyLogin/>} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </div>
  )
}

export default Main