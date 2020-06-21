import React from "react";
import {Link} from "react-router-dom";
import UserServices from "../services/UserServices";

export default class ProfileComponent extends React.Component {

    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        userType: '',
        currentUser: ''
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.currentUser !== this.state.currentUser) {
            this.setState({
                currentUser: this.state.currentUser
            })
        }
    }



    updateUsername = (newWord) =>
        this.setState(prevState => ({
            username: newWord
        }))

    updatePassword = (newWord) =>
        this.setState(prevState => ({
            password: newWord
        }))

    updateFirstName = (newWord) =>
        this.setState(prevState => ({
            firstName: newWord
        }))

    updateLastName = (newWord) =>
        this.setState(prevState => ({
            lastName: newWord
        }))

    updateEmail = (newWord) =>
        this.setState(prevState => ({
            email: newWord
        }))


    updateType = (newWord) => {
        this.setState({
            userType: newWord
        })
    }

    update = () =>
        UserServices.updateUser(this.state.username, this.state.password, this.state.firstName, this.state.lastName,
            this.state.email, this.state.userType, this.state.currentUser)

    logout = () =>
        UserServices.logout()
            .then(response => this.props.history.push("/"))

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
                                    <h3 className="navbar-brand mr-auto searchPageHeader">Profile Page</h3>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="input-group loginPage">
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        {this.state.currentUser.username} </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Edit Username"
                               onChange={(event) => this.updateUsername(event.target.value)}
                               value={this.state.username}/>
                    </div>
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        {this.state.currentUser.password} </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Edit Password"
                               onChange={(event) => this.updatePassword(event.target.value)}
                               value={this.state.password}/>
                    </div>
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">
                        {this.state.currentUser.firstName} </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Edit First Name"
                               onChange={(event) => this.updateFirstName(event.target.value)}
                               value={this.state.firstName}/>
                    </div>
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">
                        {this.state.currentUser.lastName} </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Edit Last Name"
                               onChange={(event) => this.updateLastName(event.target.value)}
                               value={this.state.lastName}/>
                    </div>
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        {this.state.currentUser.email} </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Edit Email"
                               onChange={(event) => this.updateEmail(event.target.value)}
                               value={this.state.email}/>
                    </div>
                    <label htmlFor="accountType" className="col-sm-2 col-form-label">
                        {this.state.currentUser.userType} </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Edit Account Type"
                               onChange={(event) => this.updateType(event.target.value)}
                        />
                    </div>
                    <div className="col-sm-10">
                        <button
                            onClick={() => this.update()}
                            className="btn btn-primary">
                            Update
                        </button>
                        <button
                            onClick={() => this.logout()}
                            className="btn btn-danger logoutBtn">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}