import img1 from "../Images/baile.webp1.webp";
import img2 from "../Images/iglesia.webp2.webp";
import img3 from "../Images/martini-seco.webp3.webp";
import img4 from "../Images/novia.webp4.webp";
import img5 from "../Images/novio.webp5.webp";
import img6 from "../Images/restaurante.webp6.webp";
const TimeLine = () => {
	return (
		<section id="fecha" className="py-5">
			<div className="title py-4">
				<h2>Entrada</h2>
			</div>
			<div className="d-flex justify-content-center">
				<img src={img2} width="240px" alt="" />
				<img src={img1} width="240px" alt="" />
				<img src={img3} width="240px" alt="" />
				<img src={img4} width="240px" alt="" />
				<img src={img5} width="240px" alt="" />
				<img src={img6} width="240px" alt="" />
			</div>
		</section>
	);
};

export default TimeLine;
