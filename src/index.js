import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { generateConfig } from "config";

import { createBrowserHistory } from "history";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter,
  push,
} from "connected-react-router";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { ajax } from "rxjs/ajax";
import * as reducers from "reducers";
import * as epics from "epics";

const history = createBrowserHistory();

const rootEpic = combineEpics(...Object.values(epics));
const epicMiddleware = createEpicMiddleware({
  dependencies: { ajax, push, config: generateConfig() },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  }),
  composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware))
);

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
