import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Useful.css';

class Useful extends Component{
    render(){
        return(
            <div>
            <h1 id="heading">Useful links for ITU</h1>
                <div className="gallery">
                    <div className="galleryRow">
                        <div className="galleryItem">
                            <a href="https://studyguide.itu.dk/?choosesection=1&amp;returnURL=/">
                                <img src="https://via.placeholder.com/150x150" alt="placeholder" />
                                <h2>STUDYGUIDE</h2>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus et mauris et vehicula. Nullam lectus lectus, malesuada
                                sit amet ex vel, commodo hendrerit erat.
                            </p>
                        </div>
                        <div className="galleryItem">
                            <a href="https://dk.timeedit.net/web/itu/db1/public/">
                                <img src="https://via.placeholder.com/150x150" alt="placehoder" />
                                <h2>TimeEdit</h2>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit arcu, volutpat at nisl id, ullamcorper euismod libero.
                                Morbi semper sapien vitae semper porta.
                            </p>
                        </div>
                        <div className="galleryItem">
                            <a href="https://stackoverflow.com/">
                                <img src="https://via.placeholder.com/150x150" alt="placehoder" />
                                <h2>STACKOVERFLOW</h2>
                            </a>
                            <p>
                                Curabitur pellentesque et risus quis consequat. Cras et auctor ligula, eget facilisis erat. Sed nec pharetra lorem. Mauris
                                nec velit vel libero hendrerit gravida auctor vel risus.
                            </p>
                        </div>
                    </div>
                    <div className="galleryRow">
                        <div className="galleryItem">
                            <a href="https://studyguide.itu.dk/?choosesection=1&amp;returnURL=/">
                                <img src="https://via.placeholder.com/150x150" alt="placehoder" />
                                <h2>STUDYGUIDE</h2>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus et mauris et vehicula. Nullam lectus lectus, malesuada
                                sit amet ex vel, commodo hendrerit erat.
                            </p>
                        </div>
                        <div className="galleryItem">
                            <a href="https://dk.timeedit.net/web/itu/db1/public/">
                                <img src="https://via.placeholder.com/150x150" alt="placehoder" />
                                <h2>TimeEdit</h2>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit arcu, volutpat at nisl id, ullamcorper euismod libero.
                                Morbi semper sapien vitae semper porta.
                            </p>
                        </div>
                        <div className="galleryItem">
                            <a href="https://stackoverflow.com/">
                                <img src="https://via.placeholder.com/150x150" alt="placehoder" />
                                <h2>STACKOVERFLOW</h2>
                            </a>
                            <p>
                                Curabitur pellentesque et risus quis consequat. Cras et auctor ligula, eget facilisis erat. Sed nec pharetra lorem. Mauris
                                nec velit vel libero hendrerit gravida auctor vel risus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default Useful