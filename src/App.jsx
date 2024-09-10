import "./App.css";
import Nav from "./components/nav/Nav";
import RouteController from "./routes";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<Nav />
			<RouteController />
		</>
	);
}

export default App;
