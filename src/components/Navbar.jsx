import React from 'react';
import './Navbar.css';

const Navbar = ({ setActiveComponent }) => {
  // Array of link items
  const navLinks = [
    { label: 'Staff', component: 'staff' },
    { label: 'Student', component: 'student' },
    { label: 'Business', component: 'business' },
    { label: 'Courses', component: 'courses' }
  ];

  return (
    <nav>
      <menu>
        {navLinks.map(({ label, component }) => (
          <li key={component}>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveComponent(component); }}>
              {label}
            </a>
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default Navbar;
