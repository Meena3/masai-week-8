import React from 'react';
// import logo from './logo.svg';
// import {Link,Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import './components/Style.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
// import Get from './components/Get';

function App() {
  return (
    <div className="App">
      <h3 className = "offer">FREE Shipping Order above 250Rs. </h3> 
      <Navbar/>
    </div>
  );
}

export default App;
