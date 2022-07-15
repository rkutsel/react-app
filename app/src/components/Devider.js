import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextButton from "./TextButton";
import HomeIcon from "./icons/HomeIcon";
import FileIcon from "./icons/File";
import InfoIcon from "./icons/Info";

export default function DividerStack() {
	return (
		<div>
			<Stack
				direction="row"
				divider={<Divider orientation="vertical" flexItem />}
				spacing={2}
			>
				<TextButton iconName={<HomeIcon />} btnText={"Home"} />
				<TextButton iconName={<FileIcon />} btnText={"My Resume"} />
				<TextButton iconName={<InfoIcon />} btnText={"About Me"} />
			</Stack>
		</div>
	);
}
