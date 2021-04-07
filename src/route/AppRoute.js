import React, {Component, Fragment} from 'react';
import { Router, Route, Switch } from "react-router";
import OnBord from '../Component/common/onBord';
import home from "../Page/home";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exect path="/" component={home} />
                    <Route exect path="/OnBord" component={OnBord}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;