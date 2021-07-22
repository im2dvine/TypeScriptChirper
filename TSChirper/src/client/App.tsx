/****TypeScript with React Components, React Router, and React Change Events****/
// import * as React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import { useState, useEffect } from 'react';

// import './scss/app';
// import List from './components/List';
// import Detail from './components/Detail';


// /* CLASS REACT EXAMPLE */

// //class App extends React.Component<IAppProps, IAppState>
// export default class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				{/* <h1 className="text-primary text-center">Hello {this.state.name}!</h1> */}
// 				<Router>
// 					<Switch>
// 						<Route exact path="/" component={List} />
// 						<Route path="/:name" component={Detail} />
// 					</Switch>
// 				</Router>
// 				{/* <List></List> */}
// 			</main>
// 		);
// 	}
// }

// // export interface IAppProps {}
// interface IAppProps { }

// // export interface IAppState {
// // 	name: string;
// // }
// interface IAppState {
// 	name: string;
// }

// // export default App; //does not work bc says cannot have multiple default exports..and do not need bc put export default on ln 14..


/*****************************************************************/

/*****REACT HOOKS Basics with TypeScript*******/

/*basic setup from beginning of video*/
// import * as React from 'react';

// import './scss/app';

// export default class App extends React.Component<IAppProps, IAppState> {

// 	constructor(props: IAppProps) {
// 		super(props);

// 		this.state = { name: null };
// 	}

// 	async componentDidMount() {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		}


// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hola {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }


// interface IAppProps { }


// interface IAppState {
// 	name: string;
// }


// /*********/


/*updated setup with video*/ //displays "Hola Earthlings!"
// import * as React from 'react';
// import { useState, useEffect } from 'react';

// import './scss/app';

// const App: React.SFC<IAppProps> = props => {

// 	const [ name, setName ] = useState<string>('');

// 	const getName = async () => {
// 		let r = await fetch('/api/hello');
// 		let name = await r.json();
// 		setName(name);
// 	}

// 	useEffect(() => {
// 		//return () => {}
// 		getName();
// 	}, []);

// 	return (
// 		<main className="container my-5">
// 			<h1 className="text-primary text-center">Hola {name}!</h1>
// 		</main>
// 	);
// }

// export default App;

// interface IAppProps { }

/*****************************************************************/

/*example for Details and Albums*/

import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/app';

import Albums from './components/Albums';
import Details from './components/Details';

const App: React.FC<IAppProps> = (props) => {

	return (
		<BrowserRouter>
			<main className="container my-5">
				<Switch>
					<Route exact path="/" component={Albums} />
					<Route exact path="/:id/details" component={Details} />
				</Switch>
			</main>
		</BrowserRouter>
	)
}

export default App;

interface IAppProps { }
