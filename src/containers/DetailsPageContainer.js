import React from "react";
import SearchServices from "../services/SearchServices";
import {Link} from "react-router-dom";
import DetailsTableComponent from "../components/DetailsTableComponent";

export default class DetailsPageContainer extends React.Component{

    state = {
        product: [],
        productId: this.props.match.params.productId
    }

    componentDidMount() {
        SearchServices.findProductById(this.state.productId)
            .then(actualProduct => this.setState({
                product: actualProduct
            }))
    }


    render() {
        return(
            <div>
                <nav className="navbar fixed-top navbar-dark bg-dark">
                    <div>
                        <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                            <li>
                                <Link className="nav-link detailsPageSearchLink" to="/search">Back To Search</Link>
                            </li>
                            <li>
                                <h3 className="navbar-brand mr-auto searchPageHeader">Details Page</h3>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <DetailsTableComponent
                        product={this.state.product}/>
                </div>
            </div>
        )
    }
}