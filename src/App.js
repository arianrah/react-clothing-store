import React, { Fragment } from 'react'
import { auth } from './firebase/firebase.utils'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/Homepage'
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

	//check firebase response (if authenticated) "open subscription"
	unsubscribeFromAuth = null
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(u => {
			this.setState({ currentUser: u })
			console.log(u)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}
	render() {
		return (
			<Router>
				<Fragment>
					<Header currentUser={this.state.currentUser} />
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
