import React, { useState } from "react";
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
	const [currentPage, setCurrentPage] = useState("");
	const handlePageChange = (page) => setCurrentPage(page);
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
							<Link
								to="/react-app/home"
								href="/react-app/home"
								onClick={() => {
									handlePageChange("home");
								}}
								color="inherit"
								underline={currentPage === "home" ? "always" : "none"}
							>
								<TextButton iconName={<HomeIcon />} btnText={"Home"} />
							</Link>
							<Link
								href="https://drive.google.com/file/d/1oFvzDnWskRAsYIl9FKOiM0GXV6BzVCIB/view"
								onClick={() => {
									handlePageChange("resume");
								}}
								color="inherit"
								target="_blank"
								rel="noreferrer"
								underline={currentPage === "resume" ? "always" : "none"}
							>
								<TextButton iconName={<FileIcon />} btnText={"Resume"} />
							</Link>
							<Link
								to="/react-app/about"
								href="/react-app/about"
								onClick={() => {
									handlePageChange("about");
								}}
								color="inherit"
								underline={currentPage === "about" ? "always" : "none"}
							>
								<TextButton iconName={<InfoIcon />} btnText={"About"} />
							</Link>
							<Link
								to="/react-app/projects"
								href="/react-app/projects"
								onClick={() => {
									handlePageChange("projects");
								}}
								color="inherit"
								underline={currentPage === "projects" ? "always" : "none"}
							>
								<TextButton iconName={<CodeIcon />} btnText={"Projects"} />
							</Link>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Stack
							direction="row"
							justifyContent="flex-end"
							alignItems="stretch"
						>
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
