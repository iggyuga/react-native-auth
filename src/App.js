import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'
import LoginForm from './components/LoginForm';



class App extends Component {
	componentWillMount() {
		// Initialize Firebase
		var config = {
			apiKey: 'AIzaSyBlFmeMiuakEk_E6mKewn-54i8R9YeRyio',
			authDomain: 'auth-b0269.firebaseapp.com',
			databaseURL: 'https://auth-b0269.firebaseio.com',
			projectId: 'auth-b0269',
			storageBucket: 'auth-b0269.appspot.com',
			messagingSenderId: '554543184271'
		  };
		  firebase.initializeApp(config);
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>

		);
	};
};


export default App;