// import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AboutMe from "./components/About";

// const theme = createTheme();
// const cardElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function App() {
	return (
		<>
			{/* <ThemeProvider theme={theme}> */}
			<Navbar />
			<Hero />
			<Main />
			<Footer />
			{/* </ThemeProvider> */}
		</>
	);
}
export function About() {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutMe />
			<Footer />
		</>
	);
}

export function Projects() {
	return (
		<>
			{/* <ThemeProvider theme={theme}> */}
			<Navbar />
			<Hero />
			<Main />
			<Footer />
			{/* </ThemeProvider> */}
		</>
	);
}
