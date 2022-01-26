import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/company" element={<Company />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/newproject" element={<NewProject />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
