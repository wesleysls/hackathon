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
			backgroundColor: '#ccc',
			height: 60,
			color: '#000'
		},
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
		this.directPages = this.directPages.bind(this);
	}

	componentDidMount() {
		this.props.getConfig()
		const { config } = this.props
		alert(config);

		switch (this.state.tipo) {
			case 0:
				this.props.navigation.navigate('SignUp_Morador');
				break;
			case 1:
				this.props.navigation.navigate('SignUp_Socorrista');
				break;
		}
	}

	render() {

		let tipoItems = this.state.tipos.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.tipo} />
		});




		return (
			<View style={styles.container}>
				<StatusBar backgroundColor='black' />
				<View style={styles.picker}>
					<Text style={{ fontSize: 20, color: 'black' }}>Tipo de login:</Text>
					<Picker selectedValue={this.state.tipo} onValueChange={(itemValue, itemIndex) => this.setState({ tipo: itemValue })} style={{ width: 158 }}>
						{tipoItems}
					</Picker>
					<Button onPress={() => this.directPages()} style={{ width: 200, color: '#fff' }}>
						<Text>Avançar</Text>
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

















