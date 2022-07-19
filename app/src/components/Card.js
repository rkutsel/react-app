import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/joy/Typography";
import imgCover from "../assets/images/code.jpeg";
import { Link } from "@mui/material";

export default function CardElement({}) {
	return (
		<>
			<Grid item xs={12} sm={6} md={4}>
				<Link href="#" color="inherit">
					<Card
						sx={{
							minHeight: "280px",
							minWidth: 280,
							"&:hover": { transform: "scale3d(1.01, 1.01, 1)" },
						}}
					>
						<CardCover>
							<img src={imgCover} alt="Codebase" />
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
				</Link>
			</Grid>
		</>
	);
}
