// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
// import { useEffect, useState } from "react";
// import logo from './images/nooto white 1.png';
// import "./Navbar.css"

// export default function NavBar({ setMenuState }) {

//   const handleMenuClick = (menuNumber) => {
//     console.log("Clicked on menu item:", menuNumber);
//     setMenuState(menuNumber);
//   };
  
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//         <a className="navbar-brand" href="/">
//         <img src={logo} alt="Logo" width="30" height="30" className='logo' />
//     </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link text-white 10px" onClick={() => handleMenuClick(1)}>
//               User
//             </a>
//           </li>
//           <li className="nav-item active">
//             <a className="nav-link text-white" onClick={() => setMenuState(2)}>
//               Course
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-white" onClick={() => setMenuState(3)}>
//               Classnote
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-white" onClick={() => setMenuState(4)}>
//               Assignments
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-white" onClick={() => setMenuState(5)}>
//               Evaluation
//             </a>
//           </li>
//           <form className="form-inline my-2 my-lg-0">
//             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//         </form>
//             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//         </ul>
        
//         <div>
            
//         </div>
//       </div>
//     </nav>
//   );
// }

import React from 'react';
import logo from './images/nooto white 1.png';
import "./Navbar.css";

const NavBar = ({ setMenuState }) => {
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
        <ul className="navbar-nav">
          <NavItem label="User" onClick={() => handleMenuClick(1)} />
          <NavItem label="Courses" onClick={() => handleMenuClick(2)} />
          <NavItem label="Classnotes" onClick={() => handleMenuClick(3)} />
          <NavItem label="Assignments" onClick={() => handleMenuClick(4)} />
        </ul>
      </div>

      <div className="ml-auto">
        <SearchBar />
      </div>
    </nav>
  );
};

const NavItem = ({ label, onClick }) => (
  <li className="nav-item">
    <a className="nav-link text-white" onClick={onClick}>
      {label}
    </a>
  </li>
);

const SearchBar = () => (
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
      Search
    </button>
  </form>
);

export default NavBar;