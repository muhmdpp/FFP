import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom
import "./Header.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logo from "../assets/logo.jpg";
// import './index.css'
// import { CiFacebook } from "react-icons/ci";
// import { BsInstagram } from "react-icons/bs";
// import { FaSquareXTwitter } from "react-icons/fa6";
const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    
    slideToshow: 3,
    slideToScroll: 3,
    
  };

  // const [dropDown,setdropDown]= useState(false)
  function  toggleDropdown(){
     const dropdownMenu = document.getElementById('dropdownAvatarName');
     dropdownMenu.classList.toggle('hidden');
  }

  
  return (
    <>
    <div className="">
    <div className="Header mt-3   ">
      <div className="header-left">
        <img src={logo} className="pb-3 w-4" />
      </div>
      <div className="header-right">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h4>Home</h4>
        </Link>
        <Link to="/universities" style={{ textDecoration: "none" }}>
          <h4>Universities</h4>
        </Link>
        <Link to="/courses" style={{ textDecoration: "none" }}>
          <h4>Courses</h4>
        </Link>
        <Link to="/jobs" style={{ textDecoration: "none" }}>
          <h4>Jobs</h4>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <h4>About</h4>
        </Link>
        {/* <Link to="/edit-profile" style={{ textDecoration: "none" }}>
          <h4>Edit Profile</h4>
        </Link> */}
        {/* <Link to="/Login" style={{ textDecoration: "none" }}>
          <h4>Login</h4>
        </Link> */}
      <div>
        <div className="flex-column">
<button onClick={toggleDropdown} id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full   md:me-0 focus:ring-2 focus:ring-gray-200 " type="button">
<span class="sr-only">Open user menu</span>
<img class="w-8 h-8 me-1 rounded-full" src="./img/avatar.jpg" alt="user photo" />
Muhammad P P
<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>



</div>

      </div>
      </div>


    </div>
    
    <div id="dropdownAvatarName" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-auto  mt-">
    <div class="pr-60  text-sm text-gray-900 dark:text-white">
      {/* <div class="font-medium ">Pro User</div>
      <div class="truncate text-black">name@flowbite.com</div> */}
    </div>
    <ul class="py-2 text-sm text-gray-700 " >
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-pink-800 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-pink-800 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-pink-800 dark:hover:text-white">Earnings</a>
      </li>
      <li>
      <Link to="/edit-profile" style={{ textDecoration: "none" }}>
          <h4 className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-800 hover:text-white">Edit Profile</h4>
        </Link>
      </li>
    </ul>
    <div class="py-2">
      {/* <a href="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-800 hover:text-white">Sign out</a> */}
      <Link to="/login" style={{ textDecoration: "none" }}>
          <h4 className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-800 hover:text-white">Sign out</h4>
        </Link>
    </div>
</div>
</div>
</>

  
  );
  };

export default Header;
