import React from "react";
import {Link} from "react-router-dom";


export default class RegistrComponent extends React.Component{

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
                                    <h3 className="navbar-brand mr-auto searchPageHeader">Register Page</h3>
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
                    <label htmlFor="phone" className="col-sm-2 col-form-label">
                        Phone </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Phone"
                               onChange={(event) => this.updatePassword(event.target.value)}
                               value={this.state.keyword}/>
                    </div>
                    <div className="col-sm-10">
                        <button
                            onClick={() => this.searchProducts(this.state.keyword)}
                            className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}