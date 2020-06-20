import React from "react";
import {Link} from "react-router-dom";
import CartGridComponent from "./CartGridComponent";

export default class CartComponent extends React.Component {

    state = {
        listing: []
    }



    render() {
        return(
            <div>
                <div styles={{display: 'inline-block'}}>
                    <nav className="navbar  fixed-top navbar-dark bg-dark">
                        <div>
                            <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                                <li>
                                    <Link className="nav-link searchPageHomeLink" to="/">Back To Home</Link>
                                </li>
                                <li>
                                    <h3 className="navbar-brand mr-auto searchPageHeader">Search Page</h3>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <CartGridComponent
                        listing={this.state.listing}
                    />
                </div>
            </div>

        )
    }
}