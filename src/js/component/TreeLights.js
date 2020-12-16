import React, { useState, useEffect } from "react";

export const TreeLights = () => {
	const [light, setLight] = useState("");
	const randomLight = () => {
		let randomNumber = Math.floor(Math.random() * 2) + 1;

		switch (randomNumber) {
			case 1:
				return "red";

			case 2:
				return "green";

			default:
				break;
		}
	};

	return <span style={{ color: randomLight() }}>*</span>;
};
