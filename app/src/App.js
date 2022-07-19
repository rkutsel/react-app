// import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import CardElement from "./components/Card";
import Footer from "./components/Footer";

// const theme = createTheme();
// const cardElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const urls = {
	fullStack: "https://github.com/rkutsel/local-exchange-hub",
	blog: "https://github.com/rkutsel/js-tech-blog",
	cms: "https://github.com/rkutsel/mysql-cms-builder",
	noteTaker: "https://github.com/rkutsel/online-note-taker",
	rev: "https://github.com/rkutsel/rev",
	dayPlanner: "https://github.com/rkutsel/js-day-scheduler",
	pwGenerator: "https://github.com/rkutsel/js-password-generator",
	weatherDash: "https://github.com/rkutsel/js-weather-dashboard",
};

const imgs = {};

function App() {
	return (
		<>
			{/* <ThemeProvider theme={theme}> */}
			<Navbar />
			<Hero />
			<Main />
			<CardElement url={urls.fullStack} tag="Fullstack App" />
			<Footer />
			{/* </ThemeProvider> */}
		</>
	);
}

export default App;
