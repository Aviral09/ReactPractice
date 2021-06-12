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
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheets from "./components/Stylesheets";
import Inline from "./components/Inline";
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Tables from "./components/Tables";


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
			{/* <ParentComponent/> */}
			{/* <UserGreeting/> */}
			<NameList/>
			{/* <Stylesheets primary={false}/> */}
			{/* <Inline/> */}
			{/* <h1 className='error'>Error</h1>
			<h1 className={styles.success}>Success</h1> */}
			{/* <Form/> */}
			{/* <LifecycleA/> */}
			{/* <FragmentDemo/> */}
			{/* <Tables/> */}
		</div>
	);
}

export default App;
