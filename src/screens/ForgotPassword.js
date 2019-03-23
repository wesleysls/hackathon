import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TextInput,Keyboard,TouchableHighlight,Image,StatusBar} from 'react-native';
import { connect } from 'react-redux';
import { changeEmail,forgotPassword} from '../actions/AuthActions';

export class ForgotPassword extends Component {

	static navigationOptions = {
		title:'Recuperar senha',
		headerStyle:{
            backgroundColor:'#2a2169',
            height:50,
	    },
	}

	constructor(props) {
		super(props);
		this.state = {
			name:''
		};
		
		this.trocarSenha = this.trocarSenha.bind(this);
	}
    
    componentDidUpdate(){
        if (this.props.status == 1){
        	Keyboard.dismiss();
        	this.props.navigation.navigate('PaginaInicial');
        }
    }
    trocarSenha(){
    	if(this.props.email != ''){
            this.props.forgotPassword(this.props.email);
            this.props.navigation.navigate('SignIn');
        }else{
        	alert("Preencha os campos!");
        }
	}

	render() {
		return (
			<View style={styles.container}>
			    <StatusBar backgroundColor = 'black'/>
			    <Image style={styles.logo} source={require('../assets/images/carrinho_supermercado.png')}/>
				<TextInput style={styles.input} keyboardType ='email-address' placeholder={'Digite seu email'} onChangeText={this.props.changeEmail}/>
			    <View style={{marginTop:10,marginBottom:10}}>
			        <TouchableHighlight style={styles.button} onPress={this.trocarSenha}>
			            <View style ={styles.cadastrar}>
			                <Text style ={{color:'white',fontSize:16}}>Recuperar</Text>
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
		backgroundColor:'white',
	},
	input:{
		width:'80%',
		height:50,
		fontSize:16,
		margin:10,
		color:'white',
		paddingLeft:10,
		paddingRight:10,
		borderRadius:10,
		borderColor:'#2a2169',
		borderWidth:1,
		backgroundColor:'white'
	},
	button:{
	    margin:10
	},
	cadastrar:{
		width:150,
		height:40,
		backgroundColor:'white',
		borderRadius:10,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#2a2169',
	},
	logo:{
		marginTop:10,
		width:200,
		height:210,
		marginBottom:10
	}
});

const mapStateToProps = (state) => {
	return {
		uid:state.auth.uid,
		email:state.auth.email,
	};
};

const ForgotPasswordConnect = connect(mapStateToProps, {changeEmail,forgotPassword })(ForgotPassword);
export default ForgotPasswordConnect;
















