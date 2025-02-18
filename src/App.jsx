import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Usercard from './components/usercard.jsx';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <h1>User Details</h1>
      <Usercard /> {/* Render the Usercard component */}
    </div>
  );
};

export default App;