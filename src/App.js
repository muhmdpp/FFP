import React from 'react';
import Login from './components/Login';
import Register from './components/Register'
import {Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';

import EditProfile from './components/EditProfile';
import About from './components/About';
import Home from './components/Home';
import Courses from './components/Courses';
import Jobs from './components/Jobs';
// import Footer from './components/footer';

const App = () => {
  return (


<>
{/* <Home/> */}
    <Routes Routes >
    <Route path='/' element={<Home />} />
      {/* <Route path='/' element={<Header />} /> */}
      {/* <Route path='/' element={<Footer/>} /> */}
      
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<Navigate to="/" />} />

      <Route path='/edit-profile' element={<EditProfile />} />
      <Route path='/about' element={<About />} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/jobs' element={<Jobs/>} />
      

</Routes>


    </>




  );
};

export default App;