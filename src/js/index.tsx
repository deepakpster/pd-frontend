import "babel-polyfill";
import "bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { store, history } from "./store";
import App from "./containers/App";
import "../scss/main.scss";

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route component={App} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("app")
)
