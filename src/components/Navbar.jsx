import React from 'react';
import './Navbar.css';

const Navbar = ({ setActiveComponent }) => {
  const handleClick = (e, component) => {
    e.preventDefault(); // Prevents the default link action
    setActiveComponent(component); // Sets the active component
  };

  return (
    <nav>
        <menu>
            <li><a href="#" onClick={(e) => handleClick(e, 'staff')}>Staff</a></li>
            <li><a href="#" onClick={(e) => handleClick(e, 'student')}>Student</a></li>
            <li><a href="#" onClick={(e) => handleClick(e, 'business')}>Business</a></li>
            <li><a href="#" onClick={(e) => handleClick(e, 'courses')}>Courses</a></li>
        </menu>

      
   
    
    </nav>
  );
};

export default Navbar;
