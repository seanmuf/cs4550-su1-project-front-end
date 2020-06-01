import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
    <div>
        <div>
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <div className="navbar-brand mx-auto">
                    <h3>Student MarketPlace</h3>
                </div>
                <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                    <li>
                        <Link className="nav-link" to="/search">Login</Link>
                    </li>
                    <li className="loginDivider">/</li>
                    <li>
                        <Link className="nav-link" to="/search">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <nav className="navbar navbar-dark bg-secondary homePageNav">
                <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                    <li>
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>
                </ul>
            </nav>
        </div>


    </div>

export default HomeComponent