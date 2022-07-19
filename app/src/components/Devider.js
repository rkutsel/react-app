import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Link } from "@mui/material";
import TextButton from "./TextButton";
import HomeIcon from "./icons/HomeIcon";
import FileIcon from "./icons/File";
import InfoIcon from "./icons/Info";
import CodeIcon from "./icons/Code";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Paper from "@mui/material/Paper";

export default function DividerStack() {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={2}
						>
							<TextButton iconName={<HomeIcon />} btnText={"Home"} />
							<TextButton iconName={<FileIcon />} btnText={"My Resume"} />
							<TextButton iconName={<InfoIcon />} btnText={"About Me"} />
							<TextButton iconName={<CodeIcon />} btnText={"My Projects"} />
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Stack
							direction="row"
							justifyContent="flex-end"
							alignItems="stretch"
						>
							{/* <Badge color="secondary" mt={4}>
								<MailIcon color="success" />
							</Badge> */}
							<Box
								sx={{
									display: "flex",
									"& > :not(style)": {
										width: 40,
										height: 39,
									},
								}}
							>
								<Paper variant="outlined" sx={{ mr: 2 }}>
									<Link
										href="https://github.com/rkutsel"
										color="inherit"
										target="_blank"
										rel="noreferrer"
									>
										{" "}
										<GithubIcon
											sx={{ mt: 0.4, ml: 0.2, width: 35, height: 35 }}
										/>
									</Link>
								</Paper>
								<Paper variant="outlined">
									<Link
										href="https://www.linkedin.com/in/rkutsel"
										color="inherit"
										target="_blank"
										rel="noreferrer"
									>
										<LinkedInIcon
											sx={{ mt: 0.4, ml: 0.2, width: 35, height: 35 }}
										/>
									</Link>
								</Paper>
							</Box>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
