import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import '../../styles/index.css'
//create your first component
const Home = () => {
	return (
		<div className="container text-center justify-content-around d-flex mx-auto">
			<div className="fondo d-flex text-center my-5 mx-auto">
				<div className="digito me-3"><i className="fa-regular fa-clock"></i></div>
				<div className="digito">1</div>
				<div className="digito me-3">2</div>
				<div className="digito">3</div>
				<div className="digito me-3">4</div>
				<div className="digito">5</div>
				<div className="digito">6</div>
			</div>
		</div>
	)
};

export default Home;