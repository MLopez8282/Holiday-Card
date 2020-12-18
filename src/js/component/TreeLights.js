import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const TreeLights = ({ movingDog }) => {
	const [light, setLight] = useState("");
	const [counter, setCounter] = useState(0);
	const randomLight = () => {
		let randomNumber = Math.floor(Math.random() * 2) + 1;
		switch (randomNumber) {
			case 1:
				setLight("red");
				return "red";

			case 2:
				setLight("green");
				return "green";

			default:
				break;
		}
	};

	useEffect(
		() => {
			if (movingDog > 1000) {
				setTimeout(() => {
					randomLight();
					setCounter(counter + 1);
				}, 20);
			}
		},
		[light, movingDog, counter]
	);

	return <span style={{ color: light }}>*</span>;
};

TreeLights.propTypes = {
	movingDog: PropTypes.number
};
