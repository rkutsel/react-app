import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AboutMe from "./components/About";

export function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Main />
			<Footer />
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
			<Navbar />
			<Hero />
			<Main />
			<Footer />
		</>
	);
}
