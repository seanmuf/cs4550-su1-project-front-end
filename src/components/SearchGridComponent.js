import React from "react";
import SearchCardComponent from "./SearchCardComponent";

export default class SearchGridComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <table className="table searchResultTable">
                    <thead className="searchResultHeader">
                    <tr>
                        <td>Search Results For "{this.props.keyword}"</td>
                    </tr>
                    </thead>
                </table>
                <div className="row">
                    {
                        this.props.products.map(product =>
                            <div key={product.ASIN}
                                 className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <SearchCardComponent
                                    product={product}/>
                            </div>
                        )}
                </div>
            </div>

        )
    }
}