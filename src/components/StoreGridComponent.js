import StoreCardComponent from "./StoreCardComponent";
import  React from "react";

export default class CartGridComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <table className="table searchResultTable">
                    <thead className="searchResultHeader">
                    <tr>
                        <td>Current Store</td>
                    </tr>
                    </thead>
                </table>
                <div className="row">
                    {
                        this.props.listings.map(listing =>
                            <div key={listing.id}
                                 className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <StoreCardComponent
                                    listing={listing}
                                    deleteListing={this.deleteListing}/>
                            </div>
                        )}
                </div>
            </div>

        )
    }
}