import React from "react";
import {Link} from "react-router-dom";

export default class DetailsComponent extends React.Component {
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
            </div>

        )
    }
}