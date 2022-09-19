import React from 'react';
import Helmet from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/Home/About/About';
import Contact from './components/Home/Contact/Contact';
import Home from './components/Home/Home';
import Projects from './components/Home/Projects/Projects';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <div className="App">
        <Helmet>
          <title>Ayham_PORTFOLIO</title>
          <meta name="description" content="Home page for my portfolio application" />
        </Helmet>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
