import React from "react";
import PropTypes from "prop-types";

//Defino propiedades de función simpleCounter de la app

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

//creación de función simple counter con HTML y valores
export function SimpleCounter(props) {
	return (
		//creación de estructura tipo grid en bootstrap y posterior grupo de cartas con las propiedades del contador
		<div>
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
						{/* Set de botones */}
						<div className="container-fluid d-flex justify-content-center">
							<button type="button" className="btn btn-dark">
								▶
							</button>
							<button type="button" className="btn btn-dark">
								⏸
							</button>
							<button type="button" className="btn btn-dark">
								🔄
							</button>
						</div>
						{/* Tarjeta del proyecto */}
						<div className="card">
							<h5 className="card-header">
								Contador de segundos
							</h5>
							<div className="card-body">
								<h5 className="card-title">
									Ejercicio para 4GeeksAcademy
								</h5>
								<p className="card-text">
									Crea un contador de segundos con opciones
									las opciones iniciar pausar y continuar
								</p>
								<a
									href="https://github.com/breatheco-de/exercise-simple-counter-react"
									className="btn btn-primary">
									Ir al repositorio inicial
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-4" />
			</div>
		</div>
	);
}
