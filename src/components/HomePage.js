import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import DetailsPageContainer from "../containers/DetailsPageContainer";
import ApiClientComponent from "./ApiClientComponent";
import ListingsPageContainer from "../containers/ListingsPageContainer";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponet";
import ProfileComponent from "./ProfileComponent";
import CartComponent from "./CartComponent";
import StoreComponent from "./StoreComponent";


export default class HomePage extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>

                    <Route
                        path='/store'
                        exact={true}
                        component={StoreComponent}/>

                    <Route
                        path='/cart'
                        exact={true}
                        component={CartComponent}/>

                    <Route
                        path='/profile'
                        exact={true}
                        component={ProfileComponent}/>

                    <Route
                        path='/login'
                        exact={true}
                        component={LoginComponent}/>

                    <Route
                        path='/register'
                        exact={true}
                        component={RegisterComponent}/>


                    <Route
                        path='/listings'
                        exact={true}
                        component={ListingsPageContainer}/>

                    <Route
                        path='/:category/listings'
                        exact={true}
                        component={ListingsPageContainer}/>

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