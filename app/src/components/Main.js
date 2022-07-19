import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardElement from "./Card";

const uriLinks = {
	fullStack: "https://github.com/rkutsel/local-exchange-hub",
	techBlog: "https://github.com/rkutsel/js-tech-blog",
	cmsCli: "https://github.com/rkutsel/mysql-cms-builder",
	textEditor: "https://github.com/rkutsel/online-note-taker",
	revLocator: "https://github.com/rkutsel/rev",
	dayPlanner: "https://github.com/rkutsel/js-day-scheduler",
	socialNetwork: "https://github.com/rkutsel/social-network-api",
	pwGenerator: "https://github.com/rkutsel/js-password-generator",
	weatherDash: "https://github.com/rkutsel/js-weather-dashboard",
};

export default function Album() {
	return (
		<>
			<CssBaseline />
			<Container sx={{ py: 2 }} maxWidth="md">
				<Grid container spacing={2}>
					<CardElement
						uriLink={uriLinks.fullStack}
						tag="Exchange Hub Fullstack App"
					/>
					<CardElement
						uriLink={uriLinks.socialNetwork}
						tag="Social Network API"
					/>
					<CardElement uriLink={uriLinks.techBlog} tag="Tech Blog" />
					<CardElement uriLink={uriLinks.cmsCli} tag="CLI CMS" />
					<CardElement uriLink={uriLinks.textEditor} tag="Online Text Editor" />
					<CardElement
						uriLink={uriLinks.revLocator}
						tag="EV Charging Station Finder"
					/>
					<CardElement uriLink={uriLinks.dayPlanner} tag="Day Planner" />
					<CardElement
						uriLink={uriLinks.pwGenerator}
						tag="Password Generator"
					/>
					<CardElement uriLink={uriLinks.weatherDash} tag="Weather Dashboard" />
				</Grid>
			</Container>
		</>
	);
}
