import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { NavBar, LandingPage } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
// import { MoviesList, MoviesInsert, MoviesUpdate } from "../pages/index";
function App() {
	return (
		<Router>
			<NavBar />
			<LandingPage />
			<Switch>
				{/* <Route path="/users/list" exact component={MoviesList} />
				<Route path="/users/create" exact component={MoviesInsert} />
				<Route path="/users/update/:id" exact component={MoviesUpdate} /> */}
			</Switch>
		</Router>
	);
}

export default App;
