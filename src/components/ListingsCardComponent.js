import React from "react";
import {Link} from "react-router-dom";

export default class ListingsCardComponent extends React.Component {

    state = {
        listings: this.props.listings
    }

    render() {
        return(
            <div className="card">

                <div className="card-body">
                    Hi
                </div>
            </div>
        )
    }
}