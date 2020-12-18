import React, { useState, useEffect } from "react";
import { TreeLights } from "./TreeLights";
import { Writing } from "./Writing";

//include images into your bundle
import dog from "../../img/dog.png";
import livingroom from "../../img/livingroom.jpg";
import tree from "../../img/tree.png";
import fart from "../../img/fart.png";

//create your first component
export function Home() {
	const [movingDog, setMovingDog] = useState(0);
	const [movingFart, setMovingFart] = useState(100);

	useEffect(
		() => {
			if (movingDog < 1050) {
				setTimeout(() => {
					setMovingDog(movingDog + 5);
				}, 20);
				setTimeout(() => {
					setMovingFart(movingFart === 100 ? 130 : 100);
				}, 6500);
			}
		},
		[movingDog]
	);

	return (
		<div className="text-center">
			<Writing movingDog={movingDog} />
			<img
				className="farting-dog"
				src={dog}
				style={{ height: 360, width: 380, left: movingDog }}
			/>
			<img
				className="fart"
				src={fart}
				style={{
					height: movingFart,
					left: movingDog
				}}
			/>

			<div className="treelights tree  ">
				<i className="star far fa-star" />{" "}
				<div className="lights" style={{ letterSpacing: 45 }}>
					<p>
						<TreeLights movingDog={movingDog} />
					</p>
					<p>
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
					</p>
					<p>
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
					</p>
					<p>
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
					</p>
					<p>
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
					</p>
					<p>
						{" "}
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
						<TreeLights movingDog={movingDog} />
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
