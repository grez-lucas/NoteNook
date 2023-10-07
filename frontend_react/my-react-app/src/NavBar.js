/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useEffect, useState } from "react";
import logo from './images/nooto white 1.png';
import "./Navbar.css"

export default function NavBar({ setMenuState }) {

  const handleMenuClick = (menuNumber) => {
    console.log("Clicked on menu item:", menuNumber);
    setMenuState(menuNumber);
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" width="30" height="30" className='logo' />
    </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-white 10px" onClick={() => handleMenuClick(1)}>
              User
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-white" onClick={() => setMenuState(2)}>
              course
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" onClick={() => setMenuState(3)}>
              classnote
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => setMenuState(4)}>
              Assignments
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => setMenuState(5)}>
              Evaluation
            </a>
          </li>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </ul>
        
        <div>
            
        </div>
      </div>
    </nav>
  );
}
