import React from "react";
import {Link} from "react-router-dom";
import SearchGridComponent from "../components/SearchGridComponent";
import ListingsGridComponent from "../components/ListingsGridComponent";


export default class ListingsPageContainer extends React.Component {

    state = {
        listings: [],
        category: this.props.match.params.category
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
                                    <h3 className="navbar-brand mr-auto searchPageHeader">Listings Page</h3>
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
                    <ListingsGridComponent
                        category={this.state.category}/>
                </div>


            </div>
        )
    }
}