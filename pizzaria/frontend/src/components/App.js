import { dividerClasses } from "@mui/material";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import RequestPage from "./Request";
import CozinhaPage from "./Cozinha";
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
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
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
						<Route exact path="/" element={<Private Item={RequestPage} />}/>
                        <Route exact path="/login" element={<Signin />} />
						<Route path='/cozinha'  element={<Private Item={CozinhaPage} />}/>
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
