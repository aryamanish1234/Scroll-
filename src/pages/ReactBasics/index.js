import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const ReactBasicsHome = React.lazy(() => import("./Home"));
//const ShowAndHide = React.lazy(() => import("./ShowAndHide"));

const ReactBasics = () => {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route
            />
            <Route path={`${path}`} component={ReactBasicsHome} exact />
        </Switch>
    );
};

export default ReactBasics;
