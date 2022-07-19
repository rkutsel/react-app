import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/joy/Typography";

export default function Album() {
	return (
		<>
			<CssBaseline />
			<Container sx={{ py: 2 }} maxWidth="md">
				<Grid container spacing={2}></Grid>
				<Box
					sx={{
						fontFamily: "Monospace",
						fontSize: "h6.fontSize",
						mt: 2,
						mb: 2,
					}}
				>
					<Typography variant="h1" component="h3">
						In A Few Words...
					</Typography>
				</Box>
				<Box sx={{ fontFamily: "Monospace", ml: 1, mb: 2 }}>
					I'm a Fullstack software developer with extensive background in
					backend infrastructure. In the last couple of years my focus and
					energy shifted from building and deploying computing resources in
					data-centers to building things in the cloud: AWS, Azure and GCP with
					scalability and automation in mind.
				</Box>
				<Box sx={{ fontFamily: "Monospace", ml: 1, mb: 2 }}>
					Currently enrolled in a UW Coding Bootcamp program that exposed me to
					interesting challenges of full-stack software development. I plan on
					updating my projects as I go through the program along with the ones I
					will be working on the side.{" "}
				</Box>{" "}
				<Box sx={{ fontFamily: "Monospace", ml: 1, mb: 2 }}>
					What I like outside of my work Everything that beautiful PNW has to
					offer. Luckily we have a lot out here. Want to work on things
					together? Then please reach out to me and let's talk about it!
				</Box>
			</Container>
		</>
	);
}
