import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Staff from './components/Staff';
import Student from './components/Student';
import Business from './components/Business';
import Courses from './components/Courses';

function App() {

  const [activeComponent, setActiveComponent] = useState('student');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'staff':
        return <Staff />;
      case 'student':
        return <Student />;
      case 'business':
        return <Business />;
      case 'courses':
          return <Courses />;
      default:
        return <Student />;
    }
  };
 
  return (
    <>
      <Navbar setActiveComponent={setActiveComponent} />
      <main>
        {renderComponent()}
      </main>
    </>
  );
}

export default App;
