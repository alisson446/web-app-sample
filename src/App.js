import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Clock from './components/Clock';

function click(e) {
	e.preventDefault();
	alert('button clicked');
}

class App extends Component {
	render() {
		return (
			<div>
				<Welcome firstName="Alisson" lastName="Oliveira" />
				<Clock />
				<button onClick={click}>click</button>
			</div>
		);
	}
}

export default App;
