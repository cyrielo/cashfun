import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomeScss from './../styles/home.scss';

class App extends React.Component {
	render() {
		return (
			<Router >
				<Switch >
					<Route exact path="/"  component={ Home } />
					<Route path="/login" component={ Login }/>
					<Route path="/signup" component={ SignUp }/>
				</Switch>
			</Router>
		);
	}
}

export default App;
