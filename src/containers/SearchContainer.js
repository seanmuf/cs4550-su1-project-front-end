import React from "react";
import {Link} from "react-router-dom";
import SearchResultComponent from "../components/SearchResultComponent";
import SearchServices from "../services/SearchServices";

export default class SearchContainer extends React.Component {

    state = {
        keyword: '',
        products: [{_id: 123, title: 'soap', price: 4},{_id: 3, title: 'soap', price: 4},{_id: 4, title: 'soap', price: 4},{_id: 5, title: 'soap', price: 4},{_id: 6, title: 'soap', price: 4}]
    }

    updateKeyWord = (newWord) =>
        this.setState(prevState => ({
            keyword: newWord
        }))

    searchProducts = (keyword) =>
        SearchServices.findProductsByKeyWord(keyword)
            .then(actualProducts =>
            this.setState(actualProducts => ({
                products: actualProducts
            })))


    render() {
        return (
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
                        <div>
                            <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                                <li className="newCourseInput">
                                    <div className="input-group">
                                        <input className="form-control"
                                               placeholder="Keyword"
                                               onChange={(event) => this.updateKeyWord(event.target.value)}
                                               value={this.state.keyword}/>
                                        <div className="input-group-append">
                                            <button
                                                onClick={this.searchProducts}
                                                className="btn btn-success">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div>
                    <SearchResultComponent
                        products={this.state.products}/>
                </div>

            </div>
        )
    }
}