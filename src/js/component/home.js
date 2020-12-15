import React from "react";

//include images into your bundle
import dog from "../../img/dog.png";
import livingroom from "../../img/livingroom.jpg";
import tree from "../../img/tree.png";

//create your first component
export function Home() {
	return (
		<div className="text-center">
			<img
				className="farting-dog"
				src={dog}
				style={{ height: 360, width: 380 }}
			/>

			<img
				className="tree"
				src={tree}
				style={{ width: 500, height: 560 }}
			/>
			<img
				className="livingroom"
				src={livingroom}
				style={{ width: 1450, height: 700 }}
			/>
		</div>
	);
}
