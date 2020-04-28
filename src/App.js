import React, { Fragment } from 'react'
import { auth } from './firebase/firebase.utils'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/Header/Header'
import AccountForm from './pages/account-form/AccountForm'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentUser: null
		}
	}

	//check firebase response (if authenticated)
	componentDidMount() {
		auth.onAuthStateChanged(u => {
			this.setState({ currentUser: u })
			console.log(u)
		})
	}
	render() {
		return (
			<Router>
				<Fragment>
					<Header />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/shop" component={ShopPage} />
						<Route path="/login" component={AccountForm} />
					</Switch>
				</Fragment>
			</Router>
		)
	}
}

export default App
