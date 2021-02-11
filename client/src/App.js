import "./styles/App.css";
import { Jumbotron } from "./components/Jumbo";
import Restaurants from "./components/Restaurants";
import { useState } from "react";

function App() {
	return (
		<div className="App">
			<Jumbotron />
			<div className="App-restaurants">
				<Restaurants />
			</div>
		</div>
	);
}

export default App;
