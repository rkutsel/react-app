import Card from "@mui/joy/Card";
import CardActions from "@mui/material/CardActions";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/joy/Typography";
import Container from "@mui/material/Container";
import imgLocalExchange from "../assets/images/code.jpeg";

export default function CardElement({ url, tag }) {
	return (
		<>
			<Container sx={{ py: 8 }} maxWidth="md">
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6} md={4}>
						<Link href={url} color="inherit">
							<Card
								sx={{
									minHeight: "280px",
									minWidth: 280,
									"&:hover": {
										transform: "scale3d(1.01, 1.01, 0.1)",
									},
								}}
							>
								<CardCover>
									<img src={imgLocalExchange} alt="" />
								</CardCover>
								<CardCover
									sx={{
										background:
											"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
									}}
								/>
								<CardContent sx={{ justifyContent: "flex-end" }}>
									<Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
										{tag}
									</Typography>
								</CardContent>
							</Card>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
