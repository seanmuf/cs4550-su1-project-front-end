import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import DetailsComponent from "./DetailsComponent";
import ApiClient from "../prototype/ApiClient";


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
                        component={ApiClient}/>

                        <Route
                            path='/details'
                            exact={true}
                            component={DetailsComponent}/>

                </div>
            </BrowserRouter>
        )
    }

}