//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Proptypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Card } from "./component/card.js";
import newLocal from "./component/counter";

//render your react application
ReactDOM.render(
	<SimpleCounter
		digitOne={newLocal.one}
		digitTwo={newLocal.two}
		digitThree={newLocal.three}
		digitFour={newLocal.four}
		digitFive={newLocal.five}
		digitSix={newLocal.Six}
	/>,
	document.querySelector("#app")
);
