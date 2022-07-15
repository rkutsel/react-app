import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DividerStack from "./Devider";

export default function Navbar() {
	return (
		<>
			<AppBar position="relative">
				<Toolbar
					sx={{
						backgroundColor: "#0091ea",
					}}
				>
					{/* <CameraIcon sx={{ mr: 2 }} /> */}
					{/* <Typography variant="h6" color="inherit" noWrap>
						Roman Kutsel
					</Typography> */}
					<DividerStack />
				</Toolbar>
			</AppBar>
		</>
	);
}
