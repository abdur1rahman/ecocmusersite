import React, {Component, Fragment} from 'react';
import { Route, Switch } from "react-router";
import home from "../Page/home";
import OnBordPages from "../Page/OnBordPages";
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exect path="/" component={home} />
                    <Route exect path="/onbord" component={OnBordPages} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;