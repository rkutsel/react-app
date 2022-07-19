import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import avatar from "../avatar.jpeg";

import Grid from "@mui/material/Grid";

export default function Hero() {
	return (
		<>
			<Box
				sx={{
					// bgcolor: "background.paper",
					backgroundColor: "#263238",
					pt: 8,
					pb: 6,
				}}
			>
				{/* <Stack direction="row" spacing={3} justifyContent="center"> */}
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Avatar
								alt="Roman Kutsel"
								src={avatar}
								sx={{ width: 180, height: 180, ml: 4 }}
							/>
						</Grid>
						<Grid item xs={4}>
							<Container maxWidth="sm">
								<Typography
									component="h1"
									variant="h3"
									align="center"
									color="common.white"
									gutterBottom
								>
									Roman Kutsel
								</Typography>
								<Typography
									variant="h6"
									align="center"
									color="common.white"
									paragraph
								>
									Fullstack Web Developer and a Pacific North West resident.
									This is a placeholder for my mini React project that I made
									for myself.
								</Typography>
								{/* <Stack
							sx={{ pt: 4 }}
							direction="row"
							spacing={2}
							justifyContent="center"
						></Stack> */}
							</Container>
						</Grid>
						{/* </Stack> */}
					</Grid>
				</Box>
			</Box>
		</>
	);
}
