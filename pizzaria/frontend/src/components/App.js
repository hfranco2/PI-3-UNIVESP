import { dividerClasses } from "@mui/material";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import RequestPage from "./request";
import Signin from "./Signin";
import {
	BrowserRouter as Router,
	Routes,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import { AuthProvider } from "../context/auth";

const Private = ({ Item }) => {
	const signed = useAuth();
	return signed > 0 ? <App /> : <Signin />;
};
export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<AuthProvider>
				<Router>
					<Routes>
						<Route exact path="/" element={<RequestPage />} />
                        <Route exact path="/login" element={<Signin />} />
					</Routes>
				</Router>
			</AuthProvider>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
