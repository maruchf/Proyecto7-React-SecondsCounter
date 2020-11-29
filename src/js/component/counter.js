import React from "react";
import PropTypes from "prop-types";


//Creación del componente contador con set interval

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 1000000);
	const five = Math.floor(counter / 100000);
	const four = Math.floor(counter / 10000);
	const three = Math.floor(counter / 1000);
	const two = Math.floor(counter / 100);
	const one = Math.floor(counter / 10);
	console.log(six, five, four, three, two, one);
	counter++;
	const newLocal = (six, five, four, three, two, one);
	return newLocal;
}, 1000);

export default newLocal;
