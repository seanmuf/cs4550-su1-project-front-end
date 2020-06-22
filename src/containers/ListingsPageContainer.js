import React from "react";
import {Link} from "react-router-dom";
import ListingsGridComponent from "../components/ListingsGridComponent";
import ListingServices from "../services/ListingServices";



export default class ListingsPageContainer extends React.Component {

    state = {
        listings: [],
        category: this.props.match.params.category,
        l_category: '',
        l_name: '',
        l_price: '',
        l_quantity: '',
    }

    componentDidMount() {
        ListingServices.findAllListingsByCategory(this.state.category)
            .then(listings => this.setState({
                listings: listings
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.category !== this.props.match.params.category) {
            this.setState({
                layout: this.props.match.params.category
            })
        }
    }

    updatel_category = (newWord) =>
        this.setState(prevState => ({
            l_category: newWord
        }))

    updatel_name = (newWord) =>
        this.setState(prevState => ({
            l_name: newWord
        }))

    updatel_price = (newWord) =>
        this.setState(prevState => ({
            l_price: newWord
        }))

    updatel_quantity = (newWord) =>
        this.setState(prevState => ({
            l_quantity: newWord
        }))

    createListing = () =>
        ListingServices.createListing(this.state.l_category, this.state.l_name, this.state.l_price, this.state.l_quantity)
            .catch(e => {
                console.log(e)
            }).then(listing =>
            this.setState((prevState) => {
                return {
                    listings: [
                        ...prevState.listings,
                        listing]
                }
            }))


    render() {
        return (
            <div className="listingPageHead">
                <div styles={{display: 'inline-block'}}>
                    <nav className="navbar  fixed-top navbar-dark bg-dark">
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

                <div className="input-group loginPage">
                    <label htmlFor="l_category" className="col-sm-2 col-form-label">
                        Enter Category </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder=''
                               onChange={(event) => this.updatel_category(event.target.value)}
                               value={this.state.l_category}/>
                    </div>
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                        Enter Name </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder=''
                               onChange={(event) => this.updatel_name(event.target.value)}
                               value={this.state.l_name}/>
                    </div>
                    <label htmlFor="l_price" className="col-sm-2 col-form-label">
                        Enter Price </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder=''
                               onChange={(event) => this.updatel_price(event.target.value)}
                               value={this.state.l_price}/>
                    </div>
                    <label htmlFor="l_quantity" className="col-sm-2 col-form-label">
                        Enter Quantity </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder=''
                               onChange={(event) => this.updatel_quantity(event.target.value)}
                               value={this.state.l_quantity}/>
                    </div>
                    <div className="col-sm-10">
                        <button
                            onClick={() => this.createListing()}
                            className="btn btn-primary">
                            Create Listing
                        </button>
                    </div>
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