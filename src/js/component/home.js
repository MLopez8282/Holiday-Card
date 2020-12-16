import React, { useState, useEffect } from "react";
import { TreeLights } from "./TreeLights";

//include images into your bundle
import dog from "../../img/dog.png";
import livingroom from "../../img/livingroom.jpg";
import tree from "../../img/tree.png";

//create your first component
export function Home() {
	const [movingDog, setMovingDog] = useState(0);

	useEffect(
		() => {
			if (movingDog < 1050) {
				setTimeout(() => {
					setMovingDog(movingDog + 5);
				}, 20);
			}
		},
		[movingDog]
	);

	return (
		<div className="text-center">
			<img
				className="farting-dog"
				src={dog}
				style={{ height: 360, width: 380, left: movingDog }}
			/>
			<div className="treelights tree">
				{" "}
				<div className="lights">
					<p>
						<TreeLights />
						<TreeLights />
						<TreeLights />
					</p>
					<p>
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
					</p>
					<p>
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
					</p>
					<p>
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
					</p>
					<p>
						{" "}
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
					</p>
					<p>
						{" "}
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
					</p>
					<p>
						{" "}
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
						<TreeLights />
					</p>
				</div>
				<img src={tree} style={{ width: 500, height: 560 }} />
			</div>
			<img
				className="livingroom"
				src={livingroom}
				style={{ width: 1450, height: 700 }}
			/>
		</div>
	);
}
