import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { ajax } from "rxjs/ajax";
import * as reducers from "reducers";
import * as epics from "epics";

const history = createBrowserHistory();

const rootEpic = combineEpics(...Object.values(epics));
const epicMiddleware = createEpicMiddleware({ dependencies: { ajax } });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...reducers,
  }),
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
