import React from 'react';
import './App.scss';
import MainRouter from './router/MainRouter'

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<MainRouter/>
			</div>
		);
	}
}

export default App;
