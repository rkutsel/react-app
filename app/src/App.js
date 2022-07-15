import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import CardElement from "./components/Card";
import Footer from "./components/Footer";

const theme = createTheme();
const cardElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Hero />
				<Main />
				<CardElement cardElements={cardElements} />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
