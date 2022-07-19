import React from "react";
import ReactDOM from "react-dom/client";
import { App, About, Projects } from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/react-app/" element={<App />} />
				<Route path="/react-app/home" element={<App />} />
				<Route path="/react-app/about" element={<About />} />
				<Route path="/react-app/projects" element={<Projects />} />
			</Routes>
		</HashRouter>
	</React.StrictMode>
);
reportWebVitals();
