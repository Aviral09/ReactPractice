import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

function App() {
	return (
		<div className='App'>
			{/* <Greet name='Bruce' heroName='Batman' />
			<Greet name='Bruce' heroName='Batmanv2'>
				<p>This is children props</p>
			</Greet>
			<Greet name='Clark' heroName='Superman'>
				<button>Action</button>
			</Greet>
			<Greet name='Diana' />

			<Welcome name='Bruce' heroName='Batman'/>
			<Welcome name='Clark' heroName='Superman'/>
			<Welcome name='Diana'/> */}
			{/* <Hello /> */}
			{/* <Message /> */}
			{/* <Counter /> */}
			{/* <Greet name='Diana' heroName='Wonder Woman'/> */}
			{/* <FunctionClick />
			<ClassClick /> */}
			{/* <EventBind/> */}
			<ParentComponent/>
		</div>
	);
}

export default App;
