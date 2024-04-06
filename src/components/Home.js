import React from 'react'
import Header from './Header'
import './Home.css'
// import Footer from './footer'
function Home() {
  return (
    <div>
      <Header />
      {/* <h1>Hello</h1> */}
      <div className='home-banner'>
        <div className='top-con'>
          <h5 className="text-white bg-pink-800 mt-5 text-center h-11 w-auto pt-2 font-bold">HOME PAGE</h5>
          <h3>Unleash Your Brilliance,<br /> Embrace Education</h3>
          <button className='view-btn'>view more</button>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Home