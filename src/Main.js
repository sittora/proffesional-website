import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";


 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Sitora Everman</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Me</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
             <Route exact path="/" element={<Home />}/>
             <Route path="/about" element={<About />}/>
             <Route path="/resume" element={<Resume />}/>
             <Route path="/projects" element={<Projects />}/>
             <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;