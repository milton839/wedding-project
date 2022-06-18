import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Rsvp = () => {
	const [data, setData] = useState({
		assistence: "",
		email: "",
		message: "",
	});
	const { assistence, email, message } = data;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				"https://v1.nocodeapi.com/volmon117/google_sheets/eJCyvRmfsUnFJqCr?tabId=hoja1",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify([[assistence, email, message]]),
				}
			);
			await response.json();
			{
				setData({ ...data, assistence: "", email: "" });
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div class="form" id="Confirmacion">
			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					id="name"
					name="assistence"
					label="Podran asistir?"
					onChange={(e) => {
						setData({ ...data, assistence: e.target.value });
					}}
					size="small"
					style={{marginRight: '10px'}}
				/>
				<TextField
					id="email"
					name="email"
					label="Preguntas o Comentarios"
					onChange={(e) => {
						setData({ ...data, email: e.target.value });
					}}
					size="small"
				/>
				<br />
				<br />
				<Button variant="text" style={{backgroundColor: "#1195F5", color:"white"}}  onClick={handleSubmit}>
					Enviar
				</Button>
			</form>
		</div>
	);
};

export default Rsvp;
