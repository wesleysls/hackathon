import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar,ActivityIndicator} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {StackActions} from 'react-navigation';
import { connect } from 'react-redux';
import { checkLogin} from '../actions/AuthActions';

export class Preload extends Component {

	static navigationOptions = {
		title:'',
		header:null
	}

	constructor(props) {
		super(props);
		this.state = {};
		this.directPages = this.directPages.bind(this);

		this.props.checkLogin();
		window.globalNavigator = this.props.navigation;

	}

	directPages() {

		switch(this.props.status) {
			case 1:

				this.props.navigation.dispatch(StackActions.reset({
					index:0,
					actions:[
						NavigationActions.navigate({routeName:'Inicio'})
					]
				}));
				break;
			case 2:

				this.props.navigation.dispatch(StackActions.reset({
					index:0,
					actions:[
						NavigationActions.navigate({routeName:'SignIn'})
					]
				}));	
				break;
		}

	}

	componentDidMount() {
		this.directPages();
	}

	componentDidUpdate() {
		this.directPages();
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

const PreloadConnect = connect(mapStateToProps, { checkLogin})(Preload);
export default PreloadConnect;

















