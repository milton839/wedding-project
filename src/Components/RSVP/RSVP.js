import { useState } from "react";
import background from "../../Images/foto1.jpg";
const Rsvp = () => {
	const [data, setData] = useState({
		name: "",
		people: "",
		phone: "",
		assistence: "",
	});
	const { name, people, phone, assistence } = data;

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
					body: JSON.stringify([[name, people, phone, assistence]]),
				}
			);
			await response.json();
			{
				setData({ ...data, assistence: "", name: "", people: "", phone: "" });
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div
			className="form"
			id="Confirmacion"
			style={{
				backgroundImage: `linear-gradient(to right, rgba(140, 140, 140, 0.4), rgba(140, 140, 140, 0.4)),url(${background})`,
				padding: "300px 0 300px 0",
				filter: "grayscale(1)",
				backgroundPosition: "center",
			}}
		>
			<div>
				<h1 fontFamily="Tangerine">RSVP</h1>
				<p>¡Queremos compartir este momento tan esperado contigo!</p>
				<p>Por favor ayúdanos confirmando tu asistencia.</p>
				<p>- No niños -</p>
			</div>
			<div className="d-flex justify-content-center">
				<form
					noValidate
					autoComplete="off"
					onSubmit={handleSubmit}
					className=""
				>
					<div className="d-flex justify-content-center">
						<div className="mr-5" style={{ marginRight: "10px" }}>
							<input
								id="name"
								className="form-control"
								style={{ width: "300px" }}
								name="assistence"
								placeholder="Podran asistir?"
								onChange={(e) => {
									setData({ ...data, assistence: e.target.value });
								}}
								size="small"
							/>
							<input
								id="email"
								className="form-control mt-3"
								style={{ width: "300px" }}
								name="email"
								placeholder="Preguntas o Comentarios"
								onChange={(e) => {
									setData({ ...data, email: e.target.value });
								}}
								size="small"
							/>
						</div>
						<div className="ml-5">
							<input
								id="name"
								className="form-control"
								style={{ width: "300px" }}
								name="assistence"
								placeholder="Podran asistir?"
								onChange={(e) => {
									setData({ ...data, assistence: e.target.value });
								}}
								size="small"
							/>
							<input
								id="email"
								className="form-control mt-3"
								style={{ width: "300px" }}
								name="email"
								placeholder="Preguntas o Comentarios"
								onChange={(e) => {
									setData({ ...data, email: e.target.value });
								}}
								size="small"
							/>
						</div>
					</div>
					<br />
					<br />
					<button
						variant="text"
						className="form-control btn btn-danger"
						style={{ width: "300px" }}
						onClick={handleSubmit}
					>
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
};

export default Rsvp;
