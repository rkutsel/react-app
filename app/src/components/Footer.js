import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Copyright() {
	return (
		<Typography variant="body2" color="common.white" align="center">
			{new Date().getFullYear()}
		</Typography>
	);
}

export default function Footer() {
	return (
		<>
			<Box
				sx={{
					backgroundColor: "#263238",
					p: 6,
				}}
				component="footer"
			>
				<Typography
					variant="h6"
					align="center"
					color="common.white"
					gutterBottom
				>
					Roman Kutsel
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="common.white"
					component="p"
				></Typography>
				<Copyright />
			</Box>
		</>
	);
}
