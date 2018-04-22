import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';
import Adds from './Adds/Adds';
import Footer from './Footer/Footer';
import './App.css';



class App extends Component {
  render() {
    return (
        <div className="hg">
          <Header />
          <Navigation />
          <Main/>
          <Adds/>
          <Footer/>
        </div>
    );
  }
}

export default App;
