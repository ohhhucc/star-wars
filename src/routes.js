import {Route, Switch} from "react-router-dom";
import App from "./pages/App";
import Details from "./pages/Details";
import React from "react";


export const APP_ROUTE = 'MAIN_ROUTE';
export const DETAILS_ROUTE = 'DETAILS_ROUTE';

const routes = [
    {
        id: APP_ROUTE,
        path: '/',
        exact: true,
        component: App
    },
    {
        id: DETAILS_ROUTE,
        path: '/people/:id',
        exact: true,
        component: Details
    }
]

export const getConfig = id => {
    const route = routes.find(r => r.id === id);
    if (route) {
        const {component, ...rest} = route;
        return rest;
    }
}

export default function Routes() {
    return (
        <Switch>
            {routes.map(route => {

                const {id, ...rest} = route;

                return (
                    <Route key={id} {...rest}/>
                )
            })}
        </Switch>
    )
}