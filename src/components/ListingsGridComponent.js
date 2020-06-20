import React from "react";
import ListingsCardComponent from "./ListingsCardComponent";


export default class ListingsGridComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <table className="table searchResultTable">
                    <thead className="searchResultHeader">
                    <tr>
                        <td className="listingHeader">{this.props.category} listings</td>
                    </tr>
                    </thead>
                </table>
                <div className="row">
                    {
                        this.props.listings.map(listing =>
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