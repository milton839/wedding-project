import { FaInstagramSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
const Footer = () => {
  return (
    <div style={{padding: '70px 0 70px 0'}}>
      <p style={{paddingBottom:"18px", fontSize:"20px",}}>© 2022 <span style={{color:"#F85043"}}>Sugar Me!</span>. Todos los derechos reservados. Images by <span style={{color:"#F85043"}}>Dmitry</span> </p>
      <div>
        <SiFacebook style={{fontSize:"50px", color:"#1195F5", marginRight:"20px" }} />
        <FaInstagramSquare style={{fontSize:"50px", color:"#F85043",  }} />

      </div>
    </div>
  );
};

export default Footer;
