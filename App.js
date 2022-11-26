import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from './dynamic/About/About';
import Footer from './dynamic/Footer/Footer';
import Header from './dynamic/Header/Header';
import Home from './dynamic/Home/Home';
import Contact from './dynamic/Contact/Contact';
import Courses from './dynamic/Courses/Courses';
import Logout from './dynamic/Logout/Logout';

function App() {
  return (
    <div id='App'>
      <Router>
         <nav className="navbar navbar-expand-lg bg-dark">
         <div className="row">
          <ul className='col-md-12 col-sm-12 col-lg-12 linkpages'>
            <li className='col-md-2 col-sm-1 col-lg-2 ps-4'><Link to="/home">Home</Link></li>
            <li className='col-md-2 col-sm-1 col-lg-2'><Link to="/about">About Us</Link></li>
            <li className='col-md-2 col-sm-1 col-lg-2'><Link to="/contact">Contact Us</Link></li>
            <li className='col-md-2 col-sm-1 col-lg-2'><Link to="/courses">Courses</Link></li>
            <li className='col-md-2 col-sm-1 col-lg-4 text-end'><Link to="/logout">Logout</Link></li>
          </ul>
          </div>
          </nav>
          <Routes>
                 <Route exact path='/home' element={
                 <div>
                  <Header></Header>
                  < Home />
                 <Footer></Footer> 
                 </div>
                 }></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/courses' element={<  Courses/>}></Route>
                 <Route exact path='/logout' element={<  Logout/>}></Route>
          </Routes>
      </Router>
      
      <Footer></Footer>  
    </div>
  )
}

export default App;
