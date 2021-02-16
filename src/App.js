
import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import profile from './components/screens/profile'
import SignUp from './components/screens/Home'
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Route path="/">
        <Home />
        </Route>
        <Route path="/Login">
        <Login />
        </Route>
        <Route path="/profile">
        <profile />
        </Route>
        <Route path="/SignUp">
        <SignUp />
        </Route>
    </BrowserRouter>
  );
}

export default App;
