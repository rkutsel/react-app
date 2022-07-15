import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#000000",
		},
		secondary: {
			main: "#ffffff",
		},
	},
});

export default function TextButton({ iconName, btnText }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Button
					variant="text"
					size="large"
					color="secondary"
					startIcon={iconName}
				>
					{btnText}
				</Button>
			</ThemeProvider>
		</>
	);
}
