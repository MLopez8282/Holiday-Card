import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Writing = ({ movingDog }) => {
	const [write, setWrite] = useState(0);

	return (
		<div className="words">
			{movingDog > 1010 ? (
				<>
					<p>
						<span>M</span>
						<span>e</span>
						<span>r</span>
						<span>r</span>
						<span>y</span>
					</p>
					<p>
						<span>C</span>
						<span>h</span>
						<span>r</span>
						<span>i</span>
						<span>s</span>
						<span>t</span>
						<span>m</span>
						<span>a</span>
						<span>s</span>
						<span>!</span>
					</p>
				</>
			) : null}
		</div>
	);
};
Writing.propTypes = {
	movingDog: PropTypes.number
};
