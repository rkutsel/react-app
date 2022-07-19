import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardElement from "./Card";

export default function Album() {
	return (
		<>
			<CssBaseline />
			<Container sx={{ py: 8 }} maxWidth="md">
				<Grid container spacing={2}>
					<CardElement />
					<CardElement />
				</Grid>
			</Container>
		</>
	);
}
