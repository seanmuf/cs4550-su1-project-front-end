import React from "react";
import {Link} from "react-router-dom";
import CartGridComponent from "./CartGridComponent";
import UserServices from "../services/UserServices";
import SellerServices from "../services/SellerServices";
import StoreServices from "../services/StoreServices";
import BuyerServices from "../services/BuyerServices";
import CartServices from "../services/CartServices";

export default class CartComponent extends React.Component {

    state = {
        listings: [],
        currentUser: '',
        currentBuyer: '',
        currentCart: ''
    }

    componentDidMount() {
        UserServices.fetchProfile()
            .catch(e => {})
            .then(currentUser => {
                if(currentUser) {
                    this.setState({currentUser: currentUser})
                }
            })
        BuyerServices.fetchBuyer()
            .catch(e => {})
            .then(currentSeller => {
                if(currentSeller) {
                    this.setState({currentBuyer: currentSeller})
                }
            })
        CartServices.fetchCart()
            .catch(e => {})
            .then(currentStore => {
                if(currentStore) {
                    this.setState({currentCart: currentStore})
                }
            })
        CartServices.findAllCartListings()
            .catch(e => {})
            .then(listings => {
                this.setState({listings: listings})
            })
        console.log(this.state.currentUser)
        console.log(this.state.currentSeller)
        console.log(this.state.currentStore)
    }

    render() {
        return(
            <div>
                <div styles={{display: 'inline-block'}}>
                    <nav className="navbar  fixed-top navbar-dark bg-dark">
                        <div>
                            <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                                <li>
                                    <Link className="nav-link searchPageHomeLink" to="/">Back To Home</Link>
                                </li>
                                <li>
                                    <h3 className="navbar-brand mr-auto searchPageHeader">Cart Page</h3>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <CartGridComponent
                        listings={this.state.listings}
                    />
                </div>
            </div>

        )
    }
}