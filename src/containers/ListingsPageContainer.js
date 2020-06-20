import React from "react";
import {Link} from "react-router-dom";
import ListingsGridComponent from "../components/ListingsGridComponent";
import ListingServices from "../services/ListingServices";



export default class ListingsPageContainer extends React.Component {

    state = {
        listings: [],
        category: this.props.match.params.category,
    }

    componentDidMount() {
        ListingServices.findAllListingsByCategory(this.state.category)
            .then(listings => this.setState({
                listings: listings
            }))
    }


    render() {
        return (
            <div>
                <div styles={{display: 'inline-block'}}>
                    <nav className="navbar  fixed-top navbar-dark bg-dark listingHead">
                        <div>
                            <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                                <li>
                                    <Link className="nav-link searchPageHomeLink" to="/">Back To Home</Link>
                                </li>
                                <li>
                                    <h3 className="navbar-brand mr-auto searchPageHeader">Listings Page</h3>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <li>
                                <Link className="nav-link listingSearch" to="/search">Search</Link>
                            </li>
                        </div>
                    </nav>
                </div>


                <div>
                    <ListingsGridComponent
                        category={this.state.category}
                        listings={this.state.listings}/>
                </div>


            </div>
        )
    }
}