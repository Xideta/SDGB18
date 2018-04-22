import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="hg__footer">
            IT-Universitetet i København
            <br/> Rued Langgaards Vej 7
            <br/> 2300 København S
            <br/> Danmark
            </div>
        )
    }
}

export default Footer