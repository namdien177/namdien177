import React from 'react';
import './App.scss';
import Header from './components/layouts/header/Header'
import MainRouter from './router/MainRouter'

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<MainRouter/>
			</div>
		);
	}
}

export default App;
