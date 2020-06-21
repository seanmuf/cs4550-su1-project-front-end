import React from "react";
import ListingServices from "../services/ListingServices";
import ListingsCardComponent from "./ListingsCardComponent";


export default class HomeGridComponent extends React.Component{
    state = {
        listings: []
    }

    componentDidMount() {
        ListingServices.findAllListings()
            .then(listings => this.setState({
                listings: listings
            }))
    }

    render() {
        return(
            <div className="container">
                <table className="table  homeGrid">
                    <thead className="searchResultHeader">
                    <tr>
                        <td className="listingHeader">Listings</td>
                    </tr>
                    </thead>
                </table>
                <div className="row">
                    {
                        this.state.listings.map(listing =>
                            <div key={listing.id}
                                 className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <ListingsCardComponent
                                    listing={listing}/>
                            </div>
                        )}
                </div>
            </div>
        )
    }

}