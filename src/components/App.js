import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from "./PigContainer";

function App() {

	// const name = hogs.name
	// const image = hogs.image

	// const hogs = hogs.name

	return (
		<div className="App">
			<Nav />
			<PigContainer hogs={hogs}/>
		</div>
	);
}

export default App;
