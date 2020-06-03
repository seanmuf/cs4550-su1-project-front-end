import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import DetailsPageContainer from "../containers/DetailsPageContainer";
import ApiClientComponent from "./ApiClientComponent";


export default class HomePage extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route
                        path='/'
                        exact={true}
                        component={HomeComponent}/>

                    <Route
                        path='/search'
                        exact={true}
                        component={ApiClientComponent}/>

                    <Route
                        path='/search/:keyword'
                        exact={true}
                        component={ApiClientComponent}/>

                    <Route exact={true}
                           path='/details'
                           component={DetailsPageContainer}/>
                    <Route
                        path='/details/:productId'
                        component={DetailsPageContainer}/>

                </div>
            </BrowserRouter>
        )
    }

}