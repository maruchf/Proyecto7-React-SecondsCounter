import React from "react";
import PropTypes from "prop-types";
import newLocal from "./component/counter";

//Defino propiedades de función simpleCounter de la app

SimpleCounter.propTypes = {
	digitSix: propTypes.number,
	digitFive: propTypes.number,
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number
};

//creación de función simple counter con HTML y valores
export function SimpleCounter(props) {
	return (
		//creación de estructura tipo grid en bootstrap y posterior grupo de cartas con las propiedades del contador
		<div className="row">
			<div className="col-4" />
			<div className="col-3">
				<div className="card-group bg-dark mt-2">
					<div className="card text-white bg-dark border-light">
						<i className="far fa-clock" />
					</div>
					<div className="card text-white bg-dark border-light p-2">
						{props.digitSix % 10}
					</div>
					<div className="card text-white bg-dark border-light p-2">
						{props.digitFive % 10}
					</div>
					<div className="card text-white bg-dark border-light p-2">
						{props.digitFour % 10}
					</div>
					<div className="card text-white bg-dark border-light p-2">
						{props.digitThree % 10}
					</div>
					<div className="card text-white bg-dark border-light p-2">
						{props.digitTwo % 10}
					</div>
					<div className="card text-white bg-dark border-light p-2">
						{props.digitOne % 10}
					</div>
				</div>
			</div>
			<div className="col-4" />
		</div>
	);
}
