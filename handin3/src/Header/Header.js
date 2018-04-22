import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './itu.svg';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <Router>
                <div className='hg__header'>
                    <Link to={'/'}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                </div>
            </Router>
        );
    }
}



export default Header