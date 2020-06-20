import React from "react";
import {Link} from "react-router-dom";
import CartGridComponent from "./CartGridComponent";

export default class ListingsCardComponent extends React.Component {

    state = {
        listing: this.props.listing
    }

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <div>Category: {this.state.listing.l_category}</div>
                    <div>Name: {this.state.listing.l_name}</div>
                    <div>Price: {this.state.listing.l_price}</div>
                    <div>Quantity: {this.state.listing.l_quantity}</div>
                    <button
                        onClick={(e) => console.log(e.target)}
                        className="btn btn-primary btn-sm">
                        Add to Cart
                    </button>
                </div>
            </div>
        )
    }
}