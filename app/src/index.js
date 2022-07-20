import React from "react";
import ReactDOM from "react-dom/client";
import { App, About, Projects } from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter basename="/react-app">
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/home" element={<App />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
reportWebVitals();
