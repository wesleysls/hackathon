import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, ScrollView, Picker, Image, TouchableHighlight, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { changeEmail, changePassword, changeConfirmPassword, changeName, changeSexo, changeData_nasc, SignUpAction_user1, SignUpAction_user1_min } from '../actions/AuthActions';
import { Input, Button } from 'native-base';

export class SignUp_Morador extends Component {

	static navigationOptions = {
		title: 'Cadastrar',
		headerStyle: {
			backgroundColor: 'white',
			height: 50,
		},
	}

	constructor(props) {
		super(props);
		this.state = {
			name: '',


		};
	}

	componentDidUpdate() {
		if (this.props.status == 1) {
			Keyboard.dismiss();
			this.props.navigation.navigate('Preload');
		}
	}

	componentDidMount() {
		this.posicao();
	}

	posicao() {
		navigator.geolocation.getCurrentPosition((data) => {
			this.setState({ latitude: data.coords.latitude, longitude: data.coords.longitude })
		}, () => {
			alert("Erro ao pegar a sua posição.")
		});
	}

	signUp() {
		const { name, sexo, data_nasc, email, password, cpassword, longitude, latitude } = this.state;
		alert(email)
		this.props.SignUpAction_user1(
			'indefinido',
			'morador',
			name,
			email,
			data_nasc,
			sexo,
			'indefinido',
			longitude,
			latitude,
			password,
			'indefinido'
		);
	}

	signUpMin() {
		const { name } = this.state;
		if (name != '') {
			alert(name)
			this.props.SignUpAction_user1min(
				name,
			);
		} else {
			alert("Preencha todos os campos!");
		}

	}

	render() {
		const { config } = this.props
		return (
			<ScrollView>
				{
					config === 'F' ? (<View style={{ height: 500 }}>

						<StatusBar backgroundColor='green' />

						<Input underlineColorAndroid="#ccc" style={{ paddingLeft: 25, marginTop: 10 }} placeholder="Nome completo" onChangeText={(name) => this.setState({ name })} />
						<Input underlineColorAndroid="#ccc" style={{ paddingLeft: 25 }} keyboardType='email-address' placeholder="Email" onChangeText={(email) => this.setState({ email })} />
						<Input underlineColorAndroid="#ccc" style={{ paddingLeft: 25 }} placeholder="Senha" onChangeText={(password) => this.setState({ password })} />
						<Input underlineColorAndroid="#ccc" style={{ paddingLeft: 25 }} placeholder="Confirmar senha" onChangeText={(cpassword) => this.setState({ cpassword })} />
						<Input underlineColorAndroid="#ccc" style={{ paddingLeft: 25 }} placeholder="Data Nascimento" onChangeText={(data_nasc) => this.setState({ data_nasc })} />
						<Input underlineColorAndroid="#ccc" style={{ paddingLeft: 25 }} placeholder="Sexo" onChangeText={(sexo) => this.setState({ sexo })} />

						<View style={{ display: 'flex', alignSelf: 'center', marginTop: 10 }}>
							<Button style={{ width: 130, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.signUp()}>
								<Text style={{ color: 'white' }}>Avançar</Text>
							</Button>
						</View>
					</View>) : (
							<View style={{ height: 500 }}>

								<StatusBar backgroundColor='red' />
								<View style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
									<Text style={{ fontSize: 20, color: 'black', marginTop: 30 }}>Status: {config == 'F' ? (<Text style={{ color: 'green' }}>SEGURO</Text>) : (<Text style={{ color: 'red' }}>NÃO SEGURO</Text>)}</Text>
								</View>
								<Input style={{ paddingLeft: 25 }}  placeholder="Nome completo" onChangeText={(name) => this.setState({ name })} />

								<View style={{ display: 'flex', alignSelf: 'center', marginTop: 10 }}>
									<Button style={{ width: 130, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.signUpMin()}>
										<Text style={{ color: 'white' }}>Avançar</Text>
									</Button>
								</View>

							</View>)
				}

			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	input: {
		width: 288,
		height: 50,
		fontSize: 16,
		margin: 10,
		color: 'black',
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 10,
		borderColor: '#2a2169',
		borderWidth: 1,
		backgroundColor: 'white'
	},
	input2: {
		width: 80,
		height: 50,
		fontSize: 16,
		margin: 10,
		color: 'black',
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 10,
		borderColor: '#2a2169',
		borderWidth: 1,
		backgroundColor: 'white'
	},
	input3: {
		width: 188,
		height: 50,
		fontSize: 16,
		margin: 10,
		color: 'black',
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 10,
		borderColor: '#2a2169',
		borderWidth: 1,
		backgroundColor: 'white'
	},
	texto: {
		fontSize: 20,
		color: 'white'
	},
	texto2: {
		fontSize: 20,
		color: '#2a2169',
		marginTop: 20,
		fontWeight: '100'
	},
	cadastrar: {
		width: 150,
		height: 40,
		backgroundColor: 'white',
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2a2169',
	},
	logo: {
		marginTop: 10,
		width: 200,
		height: 210,
	}
});

const mapStateToProps = (state) => {
	return {
		config: state.auth.config
	};
};

export default connect(mapStateToProps, { changeEmail, changePassword, changeConfirmPassword, changeName, changeSexo, changeData_nasc, SignUpAction_user1, SignUpAction_user1_min })(SignUp_Morador);

















