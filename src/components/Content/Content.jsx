import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Projects, Contact, Error404 } from '../../pages';

export default class Content extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <Error404 /> } />
      </Routes>
    );
  }
}
