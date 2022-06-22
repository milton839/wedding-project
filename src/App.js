import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import Cards from "./Components/Cards/Cards";
import Countdown from "./Components/Countdown/Countdown";
import Navegation from "./Components/Navegation/Navegation";
import People from "./Components/People";
import Rsvp from "./Components/RSVP/RSVP";
import SaveTheDate from "./Components/SaveTheDate";

import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Entrada from "./Components/Entrada";
import Footer from "./Components/Footer";
import TimeLine from "./Components/timeline";

const theme = createTheme({
	typography: {
		fontFamily: "Tangerine",
	},
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { deadline: "September, 30, 2022, 19:00" };
	}
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div className="App">
					<Navegation />
					<SaveTheDate />
					<Countdown deadline={this.state.deadline} />
					<People />
					<Cards />
					<TimeLine />
					<Rsvp />
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
