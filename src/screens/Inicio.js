import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar,ActivityIndicator} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {StackActions} from 'react-navigation';
import { connect } from 'react-redux';
import { checkLogin} from '../actions/AuthActions';

export class Inicio extends Component {

	static navigationOptions = {
		
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
			<StatusBar backgroundColor = 'black'/>
				 <ActivityIndicator size="large"/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#2a2169',
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		uid:state.auth.uid
	};
};

const InicioConnect = connect(mapStateToProps, { checkLogin})(Inicio);
export default InicioConnect;

















