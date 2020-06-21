import React from "react";
import {Link} from "react-router-dom";
import UserServices from "../services/UserServices";
import SellerServices from "../services/SellerServices";
import BuyerServices from "../services/BuyerServices";
import StoreServices from "../services/StoreServices";
import CartServices from "../services/CartServices";


export default class RegisterComponent extends React.Component{

    state = {
        username: '',
        password: '',
        userType: '',
        user: '',
        error: null
    }

    updateUsername = (newWord) =>
        this.setState(prevState => ({
            username: newWord
        }))

    updatePassword = (newWord) =>
        this.setState(prevState => ({
            password: newWord
        }))

    updateType = (newType) => {
        this.setState({
            userType: newType
        })
    }

    assignUser (userType) {
        if (userType === 'buyer') {
            BuyerServices.createBuyer().catch((e) => console.log(e))
        } else {
            if (userType === 'seller') {
                SellerServices.createSeller().catch((e) => console.log(e))
            }
        }
    }


    register = () => {
        UserServices.register(this.state.username, this.state.password, this.state.userType)
            .catch(e => {
                this.setState({
                    error: 'Unable to register'
                })
            })
            .then(currentUser => {
                if (currentUser) {
                    this.setState({
                        user: currentUser
                    })
                    this.assignUser(this.state.userType)
                    this.props.history.push("/profile")
                }

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
                                    <h3 className="navbar-brand mr-auto searchPageHeader">Register Page</h3>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {
                    this.state.error &&
                    <div className="alert alert-danger">
                        {this.state.error}
                    </div>
                }
                <div className="input-group loginPage">
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Enter Username"
                               onChange={(event) => this.updateUsername(event.target.value)}
                               value={this.state.username}/>
                    </div>
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Enter Password"
                               onChange={(event) => this.updatePassword(event.target.value)}
                               value={this.state.password}/>
                    </div>
                    <label htmlFor="accountType" className="col-sm-2 col-form-label">
                        Account Type </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Enter Buyer or Seller"
                               onChange={(event) => this.updateType(event.target.value)}
                               value={this.state.userType}/>
                    </div>
                    <div className="col-sm-10">
                        <button
                            onClick={() => this.register()}
                            className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}