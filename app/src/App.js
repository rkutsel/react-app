import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import CardElement from "./components/Card";
import Footer from "./components/Footer";

const theme = createTheme();

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Hero />
				<Main />
				<CardElement />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
