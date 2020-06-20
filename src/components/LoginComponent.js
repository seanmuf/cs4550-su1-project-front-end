import React from "react";
import {Link} from "react-router-dom";
import SellerServices from "../services/SellerServices";
import UserServices from "../services/UserServices";


export default class LoginComponent extends React.Component{

    state = {
        username: '',
        password: '',
        error: ''
    }

    updateUsername = (newWord) =>
        this.setState(prevState => ({
            username: newWord
        }))

    updatePassword = (newWord) =>
        this.setState(prevState => ({
            password: newWord
        }))


    login = () => {
        UserServices.login(this.state.username, this.state.password)
            .catch(e => {
                this.setState({
                    error: 'Invalid Login Attempt'
                })
            })
            .then(currentUser => {
                if(currentUser)
                    this.props.history.push("/profile")
            })

    }

    render() {
        return(
            <div className="container-fluid">
                <div styles={{display: 'inline-block'}}>
                    <nav className="navbar  fixed-top navbar-dark bg-dark">
                        <div>
                            <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                                <li>
                                    <Link className="nav-link searchPageHomeLink" to="/">Back To Home</Link>
                                </li>
                                <li>
                                    <h3 className="navbar-brand mr-auto searchPageHeader">Login Page</h3>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {
                    this.state.error &&
                    <div className="alert alert-danger loginError">
                        {this.state.error}
                    </div>
                }
                <div>
                    <div className="form-group loginPage">
                        <label htmlFor="username">Username</label>
                        <input onChange={(e) => this.updateUsername(e.target.value)}
                            type="email" className="form-control" id="username"
                               aria-describedby="emailHelp" placeholder="Enter Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => this.updatePassword(e.target.value)}
                            type="password" className="form-control" id="password"
                               placeholder="Enter Password"/>
                    </div>
                    <button className="btn btn-primary"
                            onClick={() => this.login()}>
                        Login</button>
                </div>
            </div>
        )
    }


}