import React from 'react';
import "./topbar.css";

const TopBar = () => {
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img 
          className="topImage"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffi.wikipedia.org%2Fwiki%2FLisa_Simpson&psig=AOvVaw0v5P06-H_06DXE4SOs4waP&ust=1654168631881000&source=images&cd=vfe&ved=2ahUKEwjknfG-kIz4AhVSlosKHVHoD2YQjRx6BAgAEAs"
          alt="smile" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar
