import React from "react";
import {Link} from "react-router-dom";

export default class SearchResultComponent extends React.Component {

    state = {
        keyword: '',
        products: []
    }

    updateKeyWord = (newWord) =>
        this.setState(prevState => ({
            keyword: newWord
        }))

    search = () =>
        fetch('')
            .then(response => response.json())
            .then(this.renderProducts)

    renderProducts = (response) =>
        this.setState({
            products: response.search
        })


    render() {
        return (
            <div>
                <h1>Search Page</h1>
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
                <ul className="list-group">
                    {
                        this.state.products.map(products =>
                            <li className="list-group-item">products.title</li>)
                    }
                </ul>
            </div>
        )
    }
}