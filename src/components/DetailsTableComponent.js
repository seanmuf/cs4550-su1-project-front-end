import React from "react";
import DetailsRowComponent from "./DetailsRowComponent";
import SearchCardComponent from "./SearchCardComponent";

export default class DetailsTableComponent extends React.Component {
    render() {
        return (
            <div>
                <table className="table detailsTable">
                    <thead className="detailsTableHeader">
                        <tr>
                            <td>Image</td>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Rating</td>
                            <td>Total Reviews</td>
                            <td>Link To Product</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.product.map(product =>
                                <DetailsRowComponent
                                    product={product}
                                    key={this.props.product.ASIN}
                                />
                        )
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}