import { createTheme, ThemeProvider } from "@mui/material/styles";
import Main from "./components/Main";
import Footer from "./components/Footer";

const theme = createTheme();

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Main />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
