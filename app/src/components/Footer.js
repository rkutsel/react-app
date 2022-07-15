import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="">
				Roman Kutsel
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Footer() {
	return (
		<>
			<Box
				sx={{
					// bgcolor: "background.paper",
					backgroundColor: "#0091ea",
					p: 6,
				}}
				component="footer"
			>
				<Typography variant="h6" align="center" gutterBottom>
					Roman Kutsel
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					Social Media
				</Typography>
				<Copyright />
			</Box>
		</>
	);
}
