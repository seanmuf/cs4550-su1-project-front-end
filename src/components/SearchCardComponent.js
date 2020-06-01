import React from "react";
import {Link} from "react-router-dom";

export default class SearchCardComponent extends React.Component {

    state = {
        product: this.props.product
    }

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <Link to="/details">
                    <button className="btn btn-primary btn-sm">
                        More Details
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}