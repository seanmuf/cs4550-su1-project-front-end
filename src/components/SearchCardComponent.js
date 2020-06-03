import React from "react";
import {Link} from "react-router-dom";

export default class SearchCardComponent extends React.Component {

    state = {
        product: this.props.product
    }

    render() {
        return(
            <div className="card">
                <img className="card-img-top" src={this.state.product.imageUrl}/>
                <div className="card-body">
                    <div>{this.state.product.title}</div>
                    <div>{this.state.product.price}</div>
                    <Link to={`/details/${this.state.product.ASIN}`}>
                    <button
                        className="btn btn-primary btn-sm">
                        More Details
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}