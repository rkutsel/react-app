import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function CardElement({ cardElements }) {
	return (
		<>
			<Container sx={{ py: 8 }} maxWidth="md">
				<Grid container spacing={4}>
					{cardElements.map((card) => (
						<Grid item key={card} xs={12} sm={6} md={4}>
							<Card
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<CardMedia
									component="img"
									sx={{
										// 16:9
										pt: "56.25%",
									}}
									image="https://source.unsplash.com/random"
									alt="random"
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom variant="h5" component="h2">
										Heading
									</Typography>
									<Typography>
										This is a media card. You can use this section to describe
										the content.
									</Typography>
								</CardContent>
								<CardActions></CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
}
