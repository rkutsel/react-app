import React from "react";
import ReactDOM from "react-dom/client";
import { App, About, Projects } from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter basename="/">
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/home" element={<App />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</HashRouter>
	</React.StrictMode>
);
reportWebVitals();
