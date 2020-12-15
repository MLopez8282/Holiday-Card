import React from "react";

//include images into your bundle
import dog from "../../img/dog.png";
import livingroom from "../../img/livingroom.jpg";
import tree from "../../img/tree.png";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<img className="farting-dog" src={dog}  />
			<img className="livingroom" src={livingroom} />
			<img className="tree" src={tree} />
		</div>
	);
}
