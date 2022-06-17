import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";

const TimeLine = () => {
	return (
		<section id="fecha">
			<Grid conteiner justifyContent="center" alignItems="center" p={12}>
				<Card>
					<CardContent>
						<CardMedia component="img" image="icon"></CardMedia>
						<Typography>Entrada</Typography>
					</CardContent>
				</Card>
			</Grid>
		</section>
	);
};

export default TimeLine;
