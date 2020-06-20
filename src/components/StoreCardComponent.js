import React from "react";
import ListingServices from "../services/ListingServices";

export default class StoreCardComponent extends React.Component {

    state = {
        listing: this.props.listing
    }

    deleteListing = (listing) =>
        ListingServices.deleteListing(listing)
            .then(response => response.json())

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
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}