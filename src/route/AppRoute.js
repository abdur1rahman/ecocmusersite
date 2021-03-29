import React, {Component, Fragment} from 'react';
import { Router, Route, Switch } from "react-router";
import home from "../Page/home";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exect to="/" component={home} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;