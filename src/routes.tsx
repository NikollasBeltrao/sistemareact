import { format } from "path";
import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} exact path="/"/>
            <Route component={Register} exact path="/register"/>
        </BrowserRouter>
    );
}
export default Routes;