import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const ScrollIndicatorPage = React.lazy(() => import("./ScrollIndicatorPage/index"))

const AppsLibrary = () => {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route component={ScrollIndicatorPage} />
        </Switch>
    );
};

export default AppsLibrary;
