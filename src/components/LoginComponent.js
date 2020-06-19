import React from "react";
import {Link} from "react-router-dom";


export default class LoginComponent extends React.Component{

    state = {
        username: '',
        password: ''
    }

    updateUsername = (newWord) =>
        this.setState(prevState => ({
            keyword: newWord
        }))

    updatePassword = (newWord) =>
        this.setState(prevState => ({
            keyword: newWord
        }))

    login = () => {
        fetch("http://localhost:8080/api/login", {
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password}),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        }).then(response => response.json())
            .catch(e => {
                this.props.history.push("/login")
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
                <div className="input-group loginPage">
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Username"
                               onChange={(event) => this.updateUsername(event.target.value)}
                               value={this.state.keyword}/>
                    </div>
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Password"
                               onChange={(event) => this.updatePassword(event.target.value)}
                               value={this.state.keyword}/>
                    </div>
                    <div className="col-sm-10">
                        <button
                            onClick={() => this.login()}
                            className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}