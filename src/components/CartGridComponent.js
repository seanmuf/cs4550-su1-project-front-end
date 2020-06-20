import CartCardComponent from "./CartCardComponent";
import  React from "react";

export default class CartGridComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <table className="table searchResultTable">
                    <thead className="searchResultHeader">
                    <tr>
                        <td>Current Cart</td>
                    </tr>
                    </thead>
                </table>
                <div className="row">
                    {
                        this.props.products.map(listing =>
                            <div key={listing.id}
                                 className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <CartCardComponent
                                    listing={listing}/>
                            </div>
                        )}
                </div>
            </div>

        )
    }
}