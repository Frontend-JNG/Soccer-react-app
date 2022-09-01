import React from "react";
import "../App";
import { Link } from "react-router-dom";
import ContactForm from "../contactForm";

const Navbar = () => {
  return ( 
    
    <nav className="navbar">
     <div>
        <h1 className="text-1">Football App⚽</h1>
    </div>
      <div className="nav-links">
        
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/Standings">
            Standings
          </Link>
        </li>
        <li>
          <Link className="links" to="/contactForm">
            Subscription
          </Link>
        </li>

        {/* <Link to="/">Home</Link>
          <Link to="/Standings"> Standings</Link>
          <Link to="/contactForm"> Contact</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
