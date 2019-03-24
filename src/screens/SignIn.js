import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TextInput,Keyboard,TouchableHighlight,Image,StatusBar,BackHandler} from 'react-native';
import { connect } from 'react-redux';
import { checkLogin,changeEmail,changePassword,SignInAction} from '../actions/AuthActions';

export class SignIn extends Component {

	static navigationOptions = {
		title:'Login',
		header:null
	}

	constructor(props) {
		super(props);
		this.state = {
			name:''
		};
		
		this.signupButton = this.signupButton.bind(this);
		this.forgotPassword = this.forgotPassword.bind(this);
	}
    
    componentDidUpdate(){
        if (this.props.status == 1){
        	Keyboard.dismiss();
        	this.props.navigation.navigate('Preload');
        }
    }
    signupButton(){
         this.props.navigation.navigate('Step1');
	}

	forgotPassword(){
         this.props.navigation.navigate('ForgotPassword');
	}

	componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }

	render() {
		return (
			<View style={styles.container}>
			    <StatusBar backgroundColor = 'black'/>
			    <Image style={styles.logo} source={require('../assets/images/carrinho_supermercado.png')}/>
				<TextInput style={styles.input} keyboardType ='email-address' placeholder={'Digite seu e-mail'} onChangeText={this.props.changeEmail}/>
				<TextInput secureTextEntry = {true} placeholder={'Digite sua senha'} underlineColorAndroid={'transparent'} style={styles.input} onChangeText={this.props.changePassword}/>
			    <View style={{flexDirection:'row',alignItems:'center'}}>
			        <TouchableHighlight style={styles.button}  onPress={this.signupButton}>
			            <Text style={styles.texto}>Cadastre-se</Text>
			        </TouchableHighlight>

			        <TouchableHighlight style={styles.button} onPress={this.forgotPassword}>
			            <Text style ={{color:'white'}}>Esqueci a senha</Text>
			        </TouchableHighlight>
			    </View>
			    <View style={{marginTop:10}}>
			        <TouchableHighlight style={styles.button} onPress={()=>{
			    	    this.props.SignInAction(this.props.email, this.props.password);}}>
			            <View style ={styles.entrar}>
			                <Text style ={{color:'black',fontSize:16}}>Entrar</Text>
			            </View>    
			        </TouchableHighlight>
			    </View>
			    


			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#fff'
	},
	input:{
		width:'80%',
		height:50,
		fontSize:16,
		margin:10,
		color:'white',
		paddingLeft:10,
		paddingRight:10,
		borderColor:'white',
		borderWidth:1,
		borderRadius:10
	},
	texto:{
		color:'#ccc',
		fontSize:20,
	},
	button:{
		margin:10,
	},
	entrar:{
		width:150,
		height:40,
		backgroundColor:'#ccc',
		borderRadius:10,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
	},
	logo:{
		width:200,
		height:210,
		marginBottom:20
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		uid:state.auth.uid,
		email:state.auth.email,
		password:state.auth.password
	};
};

const SignInConnect = connect(mapStateToProps, { checkLogin,changeEmail,changePassword,SignInAction })(SignIn);
export default SignInConnect;
















