import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		// Initialize Firebase
		const config = {
			apiKey: 'AIzaSyBlFmeMiuakEk_E6mKewn-54i8R9YeRyio',
			authDomain: 'auth-b0269.firebaseapp.com',
			databaseURL: 'https://auth-b0269.firebaseio.com',
			projectId: 'auth-b0269',
			storageBucket: 'auth-b0269.appspot.com',
			messagingSenderId: '554543184271'
		};
		firebase.initializeApp(config);

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}


	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
				<Button 
				onPress={() => firebase.auth().signOut()} >
				Log out
				</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<View>
					<Header headerText="Authentication" />
				</View>
				<View style={{ height: 50 }}>
					{this.renderContent()}
				</View>
			</View>						
		);
	}
}


export default App;
