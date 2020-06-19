import React from "react";
import {Link} from "react-router-dom";
import {fetchProfile} from "../services/SellerServices";

export default class HomeComponent extends React.Component {

    state = {
        currentUser: {
            username: ''
        }
    }
    componentDidMount() {
        fetchProfile()
            .catch(e => {})
            .then(currentUser => {
                if(currentUser) {
                    this.setState({currentUser: currentUser})
                }
            })
    }

    render() {
        return(
            <div>
                <div className="container-fluid">
                    <nav className="navbar fixed-top navbar-dark bg-dark">
                        <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                            <li>
                                <Link className="nav-link homeLogin" to="/login">Login</Link>
                            </li>
                            <li className="loginDivider">/</li>
                            <li>
                                <Link className="nav-link homeRegister" to="/register">Register</Link>
                            </li>
                        </ul>
                        <div className="navbar-brand mx-auto">
                            <h3>Student MarketPlace</h3>
                        </div>
                        <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                            <li>
                                <Link className="nav-link homeSearch" to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <nav className="navbar navbar-dark bg-secondary homePageNav">
                        <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                            <li>
                                <h3 className="homeCategory">Categories</h3>
                            </li>
                            <li>
                                <Link className="nav-link homeLink" to="/listings/product">Products</Link>
                            </li>
                            <li>
                                <Link className="nav-link homeLink" to="/listings/book">Books</Link>
                            </li>
                            <li>
                                <Link className="nav-link homeLink" to="/listings/service">Services</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/listings/housing">Housing</Link>
                            </li>
                        </ul>
                    </nav>
                </div>


            </div>

        )
    }
}

