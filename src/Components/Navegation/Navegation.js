import * as React from "react";

import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ScrollToColor from "./ScrollToColor";

const pages = ["Save the Date", "Fecha", "Lugar", "Confirmacion", ];

const Navegation = () => {
	const theme = createTheme();

	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ScrollToColor>
					<AppBar style={{ boxShadow: "none" }}>
						<Container maxWidth="xl">
							<Box disableGutters sx={{display: "flex", justifyContent: "flex-end"}}>
								<Typography
									fontFamily="Tangerine"
									variant="h2"
									noWrap
									component="div"
									sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
									color="black"
								>
									Brisia & Santiago
								</Typography>

								<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
									<IconButton
										size="large"
										aria-label="account of current user"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleOpenNavMenu}
										color="inherit"
									>
										<MenuIcon />
									</IconButton>
									<Menu
										style={{  }}
										id="menu-appbar"
										anchorEl={anchorElNav}
										anchorOrigin={{
											vertical: "bottom",
											horizontal: "right",
										}}
										keepMounted
										transformOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										open={Boolean(anchorElNav)}
										onClose={handleCloseNavMenu}
										sx={{
											display: { xs: "block", md: "none" },
										}}
									>
										{pages.map((page) => (
											<MenuItem key={page} onClick={handleCloseNavMenu}>
												<Typography textAlign="center" sx={{px: 1}}>{page}</Typography>
											</MenuItem>
										))}
									</Menu>
								</Box>
								<Typography
									fontFamily="Tangerine"
									variant="h2"
									noWrap
									component="div"
									sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
								>
									Brisia & Santiago
								</Typography>
								<Box sx={{ flexGrow: 1,paddingLeft:'800px', display: { xs: "none", md: "flex" } }}>
									{pages.map((page) => (
										<Button
											key={page}
											onClick={handleCloseNavMenu}
											sx={{ my: 2, color: "black", display: "block" }}
										>
											{page}
										</Button>
									))}
									<Typography href='#timeline' component='a' >Timeline</Typography>
								</Box>
							</Box>
						</Container>
					</AppBar>
				</ScrollToColor>
			</ThemeProvider>
		</div>
	);
};
export default Navegation;
