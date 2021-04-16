import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import home from "../Page/home";
import AboutPage from "../Page/aboutPage";
import OnBordPages from "../Page/OnBordPages";
import ContactPage from "../Page/contactPage";
import NotifiationPage from "../Page/notifiationPage";
import PriviceyPage from "../Page/priviceyPage";
import ProductDetailsPage from "../Page/productDetailsPage";
import RefanpolicyPage from "../Page/RefanpolicyPage";
import FeveraiteItemPage from "../Page/FeveraiteItemPage";
import ProductPage from "../Page/productPage";
import CallectionPage from "../Page/callectionPage";
import CategorisPage from "../Page/categorisPage";
import CardListPage from "../Page/cardListPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/'component={home}/>
                    <Route exact path='/about'component={AboutPage}/>
                    <Route exact path='/onbord' component={OnBordPages}/>
                    <Route exact path='/notifi' component={NotifiationPage}/>
                    <Route exact path='/privicy' component={PriviceyPage}/>
                    <Route exact path='/productdetails' component={ProductDetailsPage}/>
                    <Route exact path='/refanpolicy' component={RefanpolicyPage}/>
                    <Route exact path='/feverite' component={FeveraiteItemPage}/>
                    <Route exact path='/contact' component={ContactPage}/>
                    <Route exact path='/allproduct'component={ProductPage}/>
                    <Route exact path='/allcallection'component={CallectionPage}/>
                    <Route exact path='/allcategoris'component={CategorisPage}/>
                    <Route exact path='/cardLIst'component={CardListPage}/>
                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;