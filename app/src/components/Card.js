import Card from "@mui/joy/Card";
import CardActions from "@mui/material/CardActions";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/joy/Typography";
import Container from "@mui/material/Container";

export default function CardElement({ cardElements }) {
	return (
		<>
			<Container sx={{ py: 8 }} maxWidth="md">
				<Grid container spacing={4}>
					{cardElements.map((card) => (
						<Grid item key={card} xs={12} sm={6} md={4}>
							<Card sx={{ minHeight: "280px", minWidth: 290 }}>
								<CardCover>
									<img
										src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?crop=entropy&auto=format&fit=crop&w=3271"
										alt=""
									/>
								</CardCover>
								<CardCover
									sx={{
										background:
											"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
									}}
								/>
								<CardContent sx={{ justifyContent: "flex-end" }}>
									<Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
										Yosemite National Park
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
}
