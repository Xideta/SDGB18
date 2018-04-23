import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="hg__left">
                <p className="navHead">Navigation</p>
                <nav>
                    <Link to={'/'}>
                        <p className='nav about'>About ITU</p>
                    </Link>
                    <Link to={'/Useful/'}>
                        <p className='nav useful'>Useful Links</p>
                    </Link>
                    <Link to={'/Contact/'}>
                        <p className='nav contact'>Contact</p>
                    </Link>
                    <Link to={'/Partner/'}>
                        <p className='nav about'>Partners</p>
                    </Link>
                </nav>
            </div>
        );
    }
}

export default Navigation