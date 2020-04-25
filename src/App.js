import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/Homepage'

const HatsPage = () => (
	<div>
		<h1>HATS PAGE </h1>
	</div>
)

function App() {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/hats" component={HatsPage} />
				</Switch>
			</Fragment>
		</Router>
	)
}

export default App
