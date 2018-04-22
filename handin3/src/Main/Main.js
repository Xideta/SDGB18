import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About/About';
import Useful from './Useful/Useful';
import Contact from './Contact/Contact';
import Partner from './Partner/Partner';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <main>
                <div className="hg__main">
                    <Switch>
                        <Route exact path='/' component={About} />
                        <Route path='/Useful/' component={Useful} />
                        <Route path='/Contact/' component={Contact} />
                        <Route path='/Partner/' component={Partner} />
                    </Switch>
                </div>
            </main>
        );
    }
}


export default Main