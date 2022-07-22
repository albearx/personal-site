import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AboutMe from './pages/AboutMe.jsx';
// import Projects from './pages/Projects.jsx';
import ValorantTracker from './pages/ValorantTracker.jsx';
import Photos from './pages/Photos.jsx';
import Contact from './pages/Contact.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar fixed="top" bg="dark" variant="dark">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">About Me</Nav.Link>
            {/* <Nav.Link as={Link} to="/projects">Projects</Nav.Link> */}
            <NavDropdown title="Projects" id="project-dropdown">
              <NavDropdown.Item as={Link} to="/valtracker">Valorant Tracker</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/photos">Photos</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/" element={<AboutMe/>}/>
          <Route path="/valtracker" element={<ValorantTracker/>}/>
          <Route path="/photos" element={<Photos/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
       
      </div>
    </BrowserRouter>

    
  );
}

export default App;
