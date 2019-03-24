import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, TouchableHighlight } from 'react-native';
import { Button } from 'native-base'
import { connect } from 'react-redux';
import { checkLogin, SignOut } from '../actions/AuthActions';

export class Inicio extends Component {

	static navigationOptions = {

	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	logout() {
		const { SignOut, navigation, uid } = this.props
		navigation.navigate('SignIn')
		SignOut(uid)
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor='white' />
				<Button style={{ width: 50, height: 50, backgroundColor: 'blue' }} onPress={() => this.logout()}>
					<Text>Sair</Text>
				</Button>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#2a2169',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const mapStateToProps = (state) => {
	return {
		status: state.auth.status,
		uid: state.auth.uid
	};
};

const InicioConnect = connect(mapStateToProps, { checkLogin, SignOut })(Inicio);
export default InicioConnect;

















