import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './COMPONENT/login';
import Profile from './COMPONENT/profile';
import Notebook from './COMPONENT/notebook';
import Home from './COMPONENT/home';
import SignIn from './COMPONENT/signin';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(data => setName(data.name));
  }, [])
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/signin" element={<SignIn/>}/>
        <Route exact path="/notebook" element={<Notebook/>}/>
        <Route exact path="/profile" element={<Profile name={name}/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
