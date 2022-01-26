import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
function App() {
    return (
        <Router>
            {/* <NavBar /> */}
            <Container>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/company" element={<Company />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/newproject" element={<NewProject />}></Route>
                </Routes>
            </Container>
            {/* <Footer /> */}
        </Router>
    );
}

export default App;
