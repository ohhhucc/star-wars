import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {Provider} from "react-redux";
import store from "./redux";
import {ConnectedRouter} from "connected-react-router";
import {Route, Switch} from "react-router-dom";
import {history} from "./redux/reducers";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/' exact>
                    <App></App>
                </Route>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

