import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, ScrollView, Picker, Image, TouchableHighlight, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { SignUpAction_user2 } from '../actions/AuthActions';
import { Input, Button } from 'native-base';
import { auth } from 'firebase';




export class SignUp_Morador extends Component {

	static navigationOptions = {
		title: 'Cadastrar Socorrista',
		headerStyle: {
			backgroundColor: '#ccc',
			height: 50,
		},
	}

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			cargo: '',
			email: '',
			senha: '',
			data_nasc: '',
			sexo: ''
		};
	}

	componentDidUpdate() {
		// if (this.props.status == 1){
		// 	Keyboard.dismiss();
		// 	this.props.navigation.navigate('Preload');
		// }
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((data) => {
			this.setState({
				latitude: data.coords.latitude,
				longitude: data.coords.longitude
			})
		}, () => {
			alert("Erro ao buscar sua localização");
		});
	}

	changeSelects() {
		const { name, email, data_nasc, sexo, cargo, password } = this.state;

		this.props.SignUpAction_user2(
			'socorrista',
			name,
			cargo,
			email,
			sexo,
			data_nasc,
			password,			
			'token indefinido'
		);
	}

	render() {
		return (
			<ScrollView>
				<View style={{ display: 'flex', justifyContent: 'center' }}>
					<StatusBar backgroundColor='black' />
					<Input placeholder='Nome' onChangeText={(e) => this.setState({ name: e })} />
					<Input placeholder='Cargo' onChangeText={(e) => this.setState({ cargo: e })} />
					<Input placeholder='Email' onChangeText={(e) => this.setState({ email: e })} />
					<Input placeholder='Senha' onChangeText={(e) => this.setState({ password: e })} />
					<Input placeholder='Confirmar senha' onChangeText={(e) => this.setState({ csenha: e })} />
					<Input placeholder='Data Nascimento' onChangeText={(e) => this.setState({ data_nasc: e })} />
					<Input placeholder='Sexo' onChangeText={(e) => this.setState({ sexo: e })} />

					<View style={{ marginTop: 20, marginBottom: 20 }}>
						<Button onPress={() => this.changeSelects()}>
							<Text>Cadastrar</Text>
						</Button>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		config: state.auth.config
	};
};

export default connect(mapStateToProps, { SignUpAction_user2 })(SignUp_Morador);

















