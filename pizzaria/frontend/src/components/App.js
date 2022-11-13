import React, { Component } from "react";
import ReactDOM from 'react-dom/client';

import MiniDrawer from "./MiniDrawer";
export default class App extends Component {
	constructor(props) {
		super(props);
  
	}
	render() {

		return (
			<div>
				<MiniDrawer/>
				<h1>testando</h1>
               

			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
