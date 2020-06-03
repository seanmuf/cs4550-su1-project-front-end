import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
    <div>
        <div className="container-fluid">
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <div className="navbar-brand mx-auto">
                    <h3>Student MarketPlace</h3>
                </div>
                <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                    <li>
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="loginDivider">/</li>
                    <li>
                        <Link className="nav-link" to="/register">Register</Link>
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