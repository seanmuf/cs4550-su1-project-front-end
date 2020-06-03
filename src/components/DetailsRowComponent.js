import React from "react";

export default class DetailsRowComponent extends React.Component {

    state = {
        product: this.props.product
    }


    render() {
        return (
           <tr className="detailsRow">
               <td><img className="card-img-top" src={this.state.product.imageUrl}/></td>
               <td>{this.state.product.title}</td>
               <td>{this.state.product.price}</td>
               <td>{this.state.product.rating}</td>
               <td>{this.state.product.totalReviews}</td>
               <td><a href={`${this.state.product.detailPageURL}`}>Link</a></td>
           </tr>
        );
    }
}