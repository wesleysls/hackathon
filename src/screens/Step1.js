import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, Picker, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { StackActions } from 'react-navigation';
import { Button, Icon } from 'native-base'
import { connect } from 'react-redux';
import { getConfig } from '../actions/AuthActions';

export class Step1 extends Component {

	static navigationOptions = {
		title: 'Selecione uma opção',
		headerStyle: {
			backgroundColor: '#0072BB',
			height: 60,
			color: 'white'
			
		},
		headerTintColor: '#fff',
	}

	constructor(props) {
		super(props);
		this.state = {
			tipos: [
				{ "tipo": 'Morador' },
				{ "tipo": 'Socorrista' }
			],
			tipo: 0
		};
	}

	componentWillMount() {
		this.props.getConfig()
	}

	directPages() {
		const { config } = this.props


		switch (this.state.tipo) {
			case 0:
				this.props.navigation.navigate('SignUp_Morador', { criticidade: true });
				break;
			case 1:
				this.props.navigation.navigate('SignUp_Socorrista', { criticidade: true });
				break;
		}

	}

	render() {
		const { config } = this.props 
		let tipoItems = this.state.tipos.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.tipo} />
		});




		return (
			<View style={{ display: 'flex', flexDirection: 'column', height: 500 }}>

				<View style={{ display: 'flex', flex: 2, alignItems: 'center' }}>
					<Text style={{ fontSize: 20, color: 'black', marginTop: 30 }}>Tipo de login:</Text>
				</View>
				<View style={{ display: 'flex', flex: 2, alignItems: 'center' }}>
					<Text style={{ fontSize: 20, color: 'black', marginTop: 30 }}>Status: {config == 'F' ? (<Text style={{color:'green'}}>SEGURO</Text>):(<Text style={{color:'red'}}>NÃO SEGURO</Text>) }</Text>
				</View>
				<View style={{ display: 'flex', alignItems: 'center', flex: 2 }}>
					<View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#ccc', width: 280, alignItems: 'center' }}>
						<Picker selectedValue={this.state.tipo} onValueChange={(itemValue, itemIndex) => this.setState({ tipo: itemValue })} style={{color:'#000', width:280}} >
							{tipoItems}
						</Picker>
					</View>
					<Button onPress={() => this.directPages()} style={{ width: 200, color: '#fff', marginTop: 80, alignSelf: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0072BB' }}>
						<Text style={{ color: 'white' }}>Avançar</Text>
					</Button>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const mapStateToProps = (state) => {
	return {
		config: state.auth.config
	};
};

const SeletorConnect = connect(mapStateToProps, { getConfig })(Step1);
export default SeletorConnect;

















