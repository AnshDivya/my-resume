import React from 'react';
import logo from './logo.svg';
import './App.css';
import Resume from './components/resume';
import { Helmet } from "react-helmet";
import BasicExample from './components/BasicExample';

function App() {
  return (
    <div>
      <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Resume />
    </div>
    
  );
}

export default App;
