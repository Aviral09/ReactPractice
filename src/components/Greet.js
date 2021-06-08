import React from "react";

// function Greet() {
//     return <h1>Hello Aviral</h1>
// }

// export const Greet = (props) => <h1>Hello {props.name}</h1>;

// export const Greet = (props) => {
// 	console.log(props);
// 	return (
// 		<div>
// 			<h1>
// 				Hello {props.name} aka {props.heroName}
// 			</h1>
// 			{props.children}
// 		</div>
// 	);
// };

// export const Greet = (props) => {
// 	const {name,heroName} = props
// 	return (
// 		<div>
// 			<h1>
// 				Hello {name} aka {heroName}
// 			</h1>
// 		</div>
// 	);
// };

export const Greet = ({name,heroName}) => {
	return (
		<div>
			<h1>
				Hello {name} aka {heroName}
			</h1>
		</div>
	);
};
// export default Greet;
