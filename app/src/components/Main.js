import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardElement from "./Card";

const cardElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Album() {
	return (
		<>
			<CssBaseline />
			<Container sx={{ py: 8 }} maxWidth="md">
				<Grid container spacing={2}>
					<CardElement cardElements={cardElements} />
					<CardElement cardElements={cardElements} />
					{/* <Grid item xs={12} sm={6} md={4}></Grid> */}
				</Grid>
			</Container>
		</>
	);
}
