import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyDwO9_kLJBBlC_GRbR-TSx0Vph81ycGwCU',
	authDomain: 'react-clothing-db-e3b59.firebaseapp.com',
	databaseURL: 'https://react-clothing-db-e3b59.firebaseio.com',
	projectId: 'react-clothing-db-e3b59',
	storageBucket: 'react-clothing-db-e3b59.appspot.com',
	messagingSenderId: '523920427431',
	appId: '1:523920427431:web:c9a895924a36cc1e280e82',
	measurementId: 'G-N9VG6X48RP'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
