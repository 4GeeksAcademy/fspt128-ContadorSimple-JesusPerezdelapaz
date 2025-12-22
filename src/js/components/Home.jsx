import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import '../../styles/index.css'


const Home = (props) => {

	return (
		<div className="container text-center justify-content-around d-flex flex-column mx-auto">
			<div className="fondo d-flex text-center my-5 mx-auto">
				<div className="digito me-3"><i className="fa-regular fa-clock"></i></div>
				<div id="h1" className="digito">{props.h2}</div>
				<div id="h2" className="digito me-3">{props.h1}</div>
				<div id="m1" className="digito">{props.m2}</div>
				<div id="m2" className="digito me-3">{props.m1}</div>
				<div id="s1" className="digito">{props.s2}</div>
				<div id="s2" className="digito">{props.s1}</div>
			</div>
			
		</div>
	)
};

export default Home;