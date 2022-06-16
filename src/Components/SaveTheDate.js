import { Typography } from "@material-ui/core";
import { Box } from '@mui/material';
import background from "../Images/foto2.jpg";

const SaveTheDate = () => {
	return (
		<Box sx={{ backgroundImage: `linear-gradient(to right, rgba(220, 220, 220, 0.4), rgba(220, 220, 220, 0.4)),url(${background})`, padding:'320px 0 320px 0',  }}>
			<Typography variant="h3" fontFamily="Tangerine">
				Save The Date
			</Typography>
			<Typography variant="h1" fontFamily="Tangerine" sx={{fontWeight: 'bold', fontSize:'110px'}}>
				Brisia & Santiago
			</Typography>
			<Typography variant="h3" fontFamily="Tangerine">
				30-09-2022
			</Typography>
			
		</Box>
	);
};

export default SaveTheDate;
