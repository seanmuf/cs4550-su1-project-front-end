import React from "react";
import {Link} from "react-router-dom";
import SearchGridComponent from "../components/SearchGridComponent";
import SearchServices from "../services/SearchServices";

export default class SearchPageContainer extends React.Component {

    state = {
        keyword: '',
        products: []
    }

    updateKeyWord = (newWord) =>
        this.setState(prevState => ({
            keyword: newWord
        }))

    searchProducts = (keyword) => {
        SearchServices.findProductsByKeyWord(keyword)
            .then(actualProducts =>
                this.setState({
                    products: actualProducts
                }));
    }

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
                                                    onClick={() => this.searchProducts(this.state.keyword)}
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
                    <SearchGridComponent
                        products={this.state.products}
                        keyword={this.state.keyword}
                        />
                </div>


            </div>
        )
    }
}