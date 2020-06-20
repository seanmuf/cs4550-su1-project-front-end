import React from "react";


export default class CartCardComponent extends React.Component {

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <div>{this.state.listing.title}</div>
                    <div>{this.state.listing.price}</div>
                    <button
                        className="btn btn-primary btn-sm">
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}