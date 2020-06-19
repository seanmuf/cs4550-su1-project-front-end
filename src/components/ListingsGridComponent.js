import React from "react";
import ListingsCardComponent from "./ListingsCardComponent";


export default class ListingsGridComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <table className="table searchResultTable">
                    <thead className="searchResultHeader">
                    <tr>
                        <td>{this.props.category} listings</td>
                    </tr>
                    </thead>
                </table>
                <div className="row">
                   <ListingsCardComponent/>
                </div>
            </div>

        )
    }
}