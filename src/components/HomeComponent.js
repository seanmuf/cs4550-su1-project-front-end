import React from "react";
import {Link} from "react-router-dom";
import UserServices from "../services/UserServices";
import ListingsPageContainer from "../containers/ListingsPageContainer";
import HomeGridComponent from "./HomeGridComponent";

export default class HomeComponent extends React.Component {

    state = {
        currentUser: {
            username: '',
            userType: ''
        }
    }

    componentDidMount() {
        UserServices.fetchProfile()
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
                        <div className="navbar-brand mx-auto mainTitle">
                            <h3>Student MarketPlace</h3>
                        </div>
                        {
                            this.state.currentUser.username &&
                            <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                                <li>
                                    <Link className="nav-link homeSearch" to="/profile">Profile</Link>
                                </li>
                                {
                                    this.state.currentUser.userType === 'seller' &&
                                    <li className="profileDivider">/</li>
                                }
                                {
                                    this.state.currentUser.userType === 'seller' &&
                                        <li>
                                            <Link className="nav-link homeStore" to="/store">Store</Link>
                                        </li>

                                }
                                {
                                    this.state.currentUser.userType === 'buyer' &&
                                    <li className="profileDivider">/</li>
                                }
                                {
                                    this.state.currentUser.userType === 'buyer' &&
                                    <li>
                                        <Link className="nav-link homeRegister" to="/cart">Cart</Link>
                                    </li>
                                }
                            </ul>
                        }
                    </nav>
                </div>
                <div>
                    <nav className="navbar navbar-dark bg-secondary homePageNav">
                        <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                            <li>
                                <h3 className="homeCategory">Categories</h3>
                            </li>
                            <li>
                                <Link className="nav-link homeLink" to="/products/listings">Products</Link>
                            </li>
                            <li>
                                <Link className="nav-link homeLink" to="/books/listings">Books</Link>
                            </li>
                            <li>
                                <Link className="nav-link homeLink" to="/services/listings">Services</Link>
                            </li>
                            <li>
                                <Link className="nav-link homeLink" to="/housing/listings">Housing</Link>
                            </li>
                        </ul>
                        <ul className="navbar nav ml-auto">
                            <li>
                                <Link className="nav-link homeSearchLink" to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <HomeGridComponent/>
                </div>

            </div>

        )
    }
}

