import React from "react";
import {Link} from "react-router-dom";

export default class SearchContainer extends React.Component {

    state = {
        keyword: '',
        products: []
    }

    updateKeyWord = (newWord) =>
        this.setState(prevState => ({
            keyword: newWord
        }))

    render() {
        return (
            <div>
                div styles={{display: 'inline-block'}}>
                <nav className="navbar  fixed-top navbar-dark bg-dark">
                    <div className="navbar-header">
                        <a className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>
                    </div>
                    <div>
                        <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
                            <li className="newCourseInput">
                                <div className="input-group">
                                    <input className="form-control"
                                           placeholder="keyword"
                                           onChange={(event) => this.updateKeyWord(event.target.value)}
                                           value={this.state.keyword}/>
                                    <div className="input-group-append">
                                        <button
                                            onClick={this.search}
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
        )
    }
}