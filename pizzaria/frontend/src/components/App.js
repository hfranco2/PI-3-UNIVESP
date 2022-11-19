import { dividerClasses } from "@mui/material";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import RequestPage from "./request";
import CozinhaPage from "./Cozinha";
import {BrowserRouter as Router,Routes,Switch, Route, Link, Redirect} from "react-router-dom";
export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router>
				<Routes>
                     <Route exact path='/' element={<RequestPage />}/>
					 <Route path='/cozinha' element={<CozinhaPage />}/>
                </Routes>
			</Router>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
