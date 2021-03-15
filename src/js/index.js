import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import "bootstrap";
import PropTypes from "prop-types";

function Counter(props) {
	return (
		<div className="jumbotron container-fluid d-flex align-items-center">
			<div className="container-fluid d-flex align-items-center">
				<div className="row bg-dark text-white display-3 rounded d-flex align-items-center align-middle">
					<div className="icon">
						<i className="fas fa-stopwatch"></i>
					</div>

					<div className="six">{props.digitSix % 10}</div>
					<div className="five">{props.digitFive % 10}</div>
					<div className="four">{props.digitFour % 10}</div>
					<div className="three">{props.digitThree % 10}</div>
					<div className="two">{props.digitTwo % 10}</div>
					<div className="one">{props.digitOne % 10}</div>
				</div>
			</div>
		</div>
	);
}
Counter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};
let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	counter++;

	ReactDOM.render(
		<Counter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
