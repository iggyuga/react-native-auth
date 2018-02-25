// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

// Create styling for the header piece
const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		//paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 10,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20,
		color: 'red'
	}
};

// Render the component? Make it available to other parts of the app
export { Header };

