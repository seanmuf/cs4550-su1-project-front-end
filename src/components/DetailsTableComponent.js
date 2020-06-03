import React from "react";
import {Link} from "react-router-dom";
import SearchServices from "../services/SearchServices";

export default class DetailsComponent extends React.Component {

    state = {
        product: this.props.product,
        productId: this.props.match.params.productId
    }

    componentDidMount() {
        SearchServices.findProductById(this.props.match.params.productId)
            .then(actualProduct => this.setState({
                product: actualProduct
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.match.params.productId !== this.props.match.params.productId) {
            this.setState({
                productId: this.props.match.params.productId
            })
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-dark">
                    <div>
                        <Link to="/search">Back To Search</Link>
                    </div>
                    <div className="navbar-brand mr-auto detailsPageHeader">
                        <h3>Details Page</h3>
                    </div>
                </nav>

                <table className="table detailsTable">
                    <thead className="detailsTableHeader">
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>

        )
    }
}