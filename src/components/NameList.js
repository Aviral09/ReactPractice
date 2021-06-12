import React from "react";
import Person from "./Person";

function NameList() {
	const persons = [
		{
			id: 1,
			name: "Bruce",
			age: 30,
			skill: "react",
		},
		{
			id: 2,
			name: "Diana",
			age: 30,
			skill: "vue",
		},
		{
			id: 3,
			name: "Super",
			age: 30,
			skill: "angular",
		},
	];
	const personList = persons.map((person) => <Person key={person.id} person={person} />);

	const names = ['Bruce', 'Tony', 'Diana']
	const nameList = names.map((name,index) => <h2 key={index}> {index} {name}</h2>)
	// return <div>{personList}</div>;
	return <div>{nameList}</div>
}

export default NameList;
